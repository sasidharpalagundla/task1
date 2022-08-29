import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManageService } from 'src/app/manage.service';
import * as XLSX from 'xlsx';
import { ColDef } from 'ag-grid-community';
import { NgxSpinnerService } from 'ngx-spinner';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})

export class FileuploadComponent implements OnInit {

  file!: File;
  arrayBuffer: any;
  filelist: any = [];
  columnDefs;
  masterdetails: any = true
  rowData: any = [];
  flag: boolean = false;
  public defaultColDef: ColDef = {
    flex: 1,
  };
  InputVar: ElementRef | any;

  constructor(private manage: ManageService, private rout: Router, private spinner: NgxSpinnerService) {
    this.columnDefs = [
      { field: "SNo", headerName: "SERIAL NUMBER", valueGetter: "node.rowIndex + 1" },
      { field: "error", headerName: "ERROR" },
      { field: "message", headerName: "MESSAGE" },
      { field: "transactionID", headerName: "TRANSACTION ID" },
    ];
  }

  @ViewChild('fileinp', { static: false })

  public fields = JSON.parse(sessionStorage.getItem('fields') || '{}')
  public user = sessionStorage.getItem('userType');
  public org = sessionStorage.getItem('orgName');

  ngOnInit(): void {
  }

  exit() {
    this.rout.navigate([''])
  }

  onChange(event: any) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsArrayBuffer(this.file);
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      var data = new Uint8Array(this.arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: "binary" });
      var first_sheet_name = workbook.SheetNames[0];
      var worksheet = workbook.Sheets[first_sheet_name];
      //console.log(XLSX.utils.sheet_to_json(worksheet, { raw: true }));
      this.filelist = XLSX.utils.sheet_to_json(worksheet, { raw: true });
      //console.log(this.filelist)
    }
  }

  reset() {
    this.InputVar.nativeElement.value = "";
  }

  onUpload() {
    this.spinner.show()
    this.flag = true
    let token = sessionStorage.getItem('token');
    //console.log(this.fields, "fields"); console.log(this.file);

    const formData = new FormData()
    formData.set('file', this.file)
    formData.set('buyername', this.fields.name)
    formData.set('buyerid', this.fields.email)
    formData.set('buyerorg', this.fields.dcOrg)
    formData.set('posite', this.fields.sitecode)

    this.manage.upload(formData).subscribe((res: any) => {
      //console.log(res, "res")
      this.spinner.hide()
      this.rowData = res.uploadLogs;
    });
  }
}
