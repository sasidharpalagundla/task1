import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ManageService } from 'src/app/manage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  rowData: any = [];
  constructor(private manage: ManageService, public spinner: NgxSpinnerService, public rout: Router) { }
  data = {
    "poType": "rse",
    "userId": "buyer@rse.rvbl.com",
    "userType": "BUYER"
  }

  ngOnInit(): void {
    this.getshipmentData();
  }

  //services Fuction
  getshipmentData() {
    this.spinner.show()
    this.manage.token(this.data).subscribe((res: any) => {
      this.rowData.push(res);
      this.spinner.hide();
    })
  }

  dataG() {
    this.rout.navigate(['data'])
  }

  upload() {
    //console.log("clicked")
    this.rout.navigate(['fileupload'])
  }
}
