import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ColDef,
  ICellRendererParams,
} from 'ag-grid-community';
import 'ag-grid-enterprise';
import { NgxSpinnerService } from 'ngx-spinner';
import { ManageService } from '../../manage.service';
import { TotalValueRenderer } from './table.component';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})

export class DataGridComponent implements OnInit {

  columnDefs;
  detailCellRenderParams
  masterdetails: any = true;
  rowData: any = [];
  flag: boolean = false;
  public defaultColDef: ColDef = {
    flex: 1,
  };

  detailRowHeight = 200;
  tableCol: any = [];
  tableRow: any = [];

  constructor(public manage: ManageService, public http: HttpClient, public spinner: NgxSpinnerService) {
    this.columnDefs = [
      { field: "allOrdersCount", cellRenderer: 'agGroupCellRenderer' },
      { field: "shipmentsArrivingTodayCount" },
      { field: "shipmentsInTransitCount" },
      { field: "shipmentsMissedDueDateCount" },
      { field: "shipmentsToBeNotifiedCount" },
    ];
    this.detailCellRenderParams = {
      detailGridOptions: {
        columnDefs: [
          {
            field: "allOrdersCount",
            onCellClicked: this.cellData.bind(this),
            cellRenderer: (params: ICellRendererParams) => {
              return `<strong><a>${params.value}</a></strong>`
            }
          },
          { field: "shipmentsArrivingTodayCount" },
          { field: "shipmentsInTransitCount" },
          { field: "shipmentsMissedDueDateCount" },
          { field: "shipmentsToBeNotifiedCount" },
        ],
        defaultColDef: {
          flex: 1,
        }
      },
      getDetailRowData(params: any) {
        let detail: any = [];
        detail.push(params.data)
        params.successCallback(detail);
      },
    }


  }



  ngOnInit(): void {
    this.getshipmentData();
  }

  cellData(params: any) {

    //console.log(params.data, "params data");
    this.flag = true;
    this.tableCol = [
      { field: "allOrdersCount" },
      { field: "shipmentsArrivingTodayCount" },
      { field: "shipmentsInTransitCount" },
      { field: "shipmentsMissedDueDateCount" },
      { field: "shipmentsToBeNotifiedCount" },
    ];
    this.tableRow = this.rowData;
    console.log(this.tableRow, "tableRow"); console.log(this.tableCol, "tableCol");
  }

  getshipmentData() {
    let data = {
      "poType": "rse",
      "userId": "buyer@rse.rvbl.com",
      "userType": "BUYER"
    }
    this.spinner.show()
    this.manage.token(data).subscribe((res: any) => {
      this.spinner.hide()
      this.rowData.push(res);
    })
  }
}
