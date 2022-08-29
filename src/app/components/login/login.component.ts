import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageService } from '../../manage.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dropdownSettings1: IDropdownSettings = {};
  dropdownSettings2: IDropdownSettings = {};
  dropList1: any = [];
  dropList2: any = [];
  selectedItem1 = "";
  selectedItem2 = "";
  dorgArray: any = [];
  arr: any;
  dorg: any = [];

  constructor(public rout: Router, public manage: ManageService) { }

  ngOnInit(): void {
    this.Dropdown();
  }

  Dropdown() {
    this.manage.organizations().subscribe((res: any) => {
      this.dropList1 = res.data;
      //console.log(this.dropList1)

      this.dropdownSettings1 = {
        singleSelection: true,
        idField: 'orgTypeID',
        textField: 'orgName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1,
        allowSearchFilter: true,
        closeDropDownOnSelection: true,
      }
      this.dropdownSettings2 = {
        singleSelection: true,
        idField: 'userTypeID',
        textField: 'userTypeName',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 1,
        allowSearchFilter: true,
        closeDropDownOnSelection: true,
      }
    })
  }

  onselectAll(item: any) {
    console.log(item);
  }

  onItemSelect1(item: any) {
    this.dorg = item;

    //console.log(this.dorg, 'dorg')
    //console.log(this.dropList1, 'DL1')
    this.dropList1.filter((e: any) => {
      if (this.dorg.orgName == e.orgName) {
        this.dorgArray.push(e);
      }
      return this.dorgArray;
    });
    console.log(this.dorgArray, "dorgArray")

    let secondList = {
      'orgTypeID': item.orgTypeID
    }
    this.manage.userType(secondList).subscribe((res) => {
      this.dropList2 = res
    })
  }

  onItemSelect2(item: any) {
    console.log(item, "drop2 select")
    this.arr = item
    sessionStorage.setItem('orgName', this.dorg.orgName)
    sessionStorage.setItem('userType', item.userTypeName)
  }

  loginUser = new FormGroup({
    user: new FormControl('', [Validators.required]),
    pass: new FormControl('', [Validators.required]),
    userType: new FormControl(),
    orgType: new FormControl(),
  })

  check() {
    let obj = {
      "dcOrg": this.dorgArray[0].dcOrg,
      "email": this.loginUser.controls['user'].value,
      "passcode": this.loginUser.controls['pass'].value,
      "userClassification": this.arr.userTypeID
    }

    console.log(obj, 'obj')
    this.manage.login(obj).subscribe((res: any) => {
      console.log(res);

      let fields: any = {
        email: res.email,
        dcOrg: res.dcOrg,
        name: res.name,
        sitecode: res.siteCode,
      }

      if (res.status === 'Success') {
        sessionStorage.setItem('token', res.token);
        sessionStorage.setItem('fields', JSON.stringify(fields));
        console.log(fields, "fields")
        this.rout.navigate([''])
      }
    })
  }

  get user() { return this.loginUser.get('user'); }
  get pass() { return this.loginUser.get('pass'); }
  get userType() { return this.loginUser.get('userType'); }
  get orgType() { return this.loginUser.get('orgType'); }
}
