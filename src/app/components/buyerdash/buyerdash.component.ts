import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ColDef, GridOptions, GridReadyEvent, ICellRendererParams } from 'ag-grid-community';
import { NgxSpinnerService } from 'ngx-spinner';
import { ManageService } from 'src/app/manage.service';
import * as moment from 'moment';
import { Router } from '@angular/router';
import 'ag-grid-enterprise';
import { TotalValueRenderer } from '../data-grid/table.component';

@Component({
  selector: 'app-buyerdash',
  templateUrl: './buyerdash.component.html',
  styleUrls: ['./buyerdash.component.css']
})

export class BuyerdashComponent implements OnInit {

  columnDefs;
  masterdetails = true
  detailCellRendererParams
  RowData: any = [];
  public defaultColDef: ColDef = {
    flex: 1, resizable: true, filter: true, sortable: true, minWidth: 150,
  };

  detailCellRenderer = TotalValueRenderer

  tableCol: any = [];
  tableRow: any = [];
  domlayout: any;


  constructor(public manage: ManageService, public http: HttpClient, public spinner: NgxSpinnerService, public rout: Router) {

    this.domlayout = 'autoHeight';
    this.columnDefs = [
      { field: "customerSiteName", cellRenderer: 'agGroupCellRenderer' },
      { field: "customerName" },
      { field: "poDate" },
      { field: "poNumber" },
      {
        field: "deliverySite",
        cellRenderer: (params: ICellRendererParams) => {
          return params.value === undefined ? 'DPLN' : 'NA'
        }
      },
      { field: "poCurrentVersion" },
      {
        field: "poStatus", cellRenderer: (params: ICellRendererParams) => {
          return `<strong><a>${params.value}</a></strong>`
        }
      },
    ];
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: "lineno", headerName: "Line Number" },
          { field: "lineVersion" },
          { field: "shipmentNumber" },
          { field: "itemName" },
          { field: "quantity" },
          { field: "primaryUom" },
          { field: "needByDate" },
          { field: "expectedDate" },
          { field: "days", headerName: "Delivery Due Days" },
          { field: "shiptoLocation", headerName: 'Ship To Location' },
          {
            field: "cancellationStatus",
            cellRenderer: (params: ICellRendererParams) => {
              return params.value === undefined ? 'NO' : 'NA'
            }
          },
        ],
        defaultColDef: {
          flex: 1, resizable: true, filter: true, minWidth: 100,
        }
      },

      getDetailRowData(params: any) {
        console.log(params, "params")
        let detail: any = [];

        ///-----------------///

        for (var i = 0; i < (params.data.lineItems).length; i++) {
          for (var j = 0; j < (params.data.lineItems[i].shipping).length; j++) {

            if (params.data.expectedDate === undefined) {
              const rand = Math.random() * 10;
              const rounded = Math.round(rand);
              const expd = moment(params.data.lineItems[i].shipping[j].needByDate, 'DD-MM-YYYY').add(rounded, 'days').format('DD-MM-YYYY')

              detail.push({
                "lineno": params.data.lineItems[i].lineno,
                "lineVersion": params.data.lineItems[i].lineVersion,
                "shipmentNumber": params.data.lineItems[i].shipping[j] != null ? params.data.lineItems[i].shipping[j].shipmentNumber : 'NA',
                "itemName": params.data.lineItems[i].shipping[j] != null ? params.data.lineItems[i].shipping[j].itemName : 'NA',
                "quantity": params.data.lineItems[i].shipping[j] != null ? params.data.lineItems[i].shipping[j].quantity : 'NA',
                "primaryUom": params.data.lineItems[i].shipping[j] != null ? params.data.lineItems[i].shipping[j].primaryUom : 'NA',
                "needByDate": params.data.lineItems[i].shipping[j] != null ? params.data.lineItems[i].shipping[j].needByDate : 'NA',
                "shiptoLocation": params.data.lineItems[i].shipping[j] != null ? params.data.lineItems[i].shipping[j].shiptoLocation : 'NA',
                "expectedDate": params.data.lineItems[i].shipping[j] != null ? expd : 'NA',
                "days": params.data.lineItems[i].shipping[j] != null ? rounded : 'NA'
              })
            }
          }

          ///---------------///

          params.successCallback(detail);
        }

      },
    }
  }


  onGridReady(params: GridReadyEvent) {
    params.api.sizeColumnsToFit();
  }


  exit() {
    console.log("clicked")
    this.rout.navigate([''])
  }


  ngOnInit(): void {
    this.getRowData()
  }

  getRowData() {
    this.spinner.show();
    let data = {
      "poType": "rse",
      "userId": "buyer@rse.rvbl.com",
      "userType": "BUYER"
    }
    this.manage.buyerDash(data).subscribe((res: any) => {
      this.spinner.hide()
      console.log(res, "response")
      this.RowData = res.data;
    })
  }

}
