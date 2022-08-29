import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ManageService {
  url = "http://202.65.145.178:3000/dashboards/buyerDashboard"
  baseUrl = "http://202.65.145.178:3000"

  constructor(private http: HttpClient) { }

  token(params: any) {
    return this.http.get(this.url, { params: { poType: params.poType, userId: params.userId, userType: params.userType } })
  }

  organizations() {
    return this.http.get('http://202.65.145.178:3000/misc/orgs')
  }

  userType(params: any) {
    return this.http.get(`http://202.65.145.178:3000/misc/orgs/users`, { params: { orgTypeID: params.orgTypeID } })
  }

  buyerDash(params: any) {
    return this.http.get('http://202.65.145.178:3000/reports/buyerDashboard/allShipments', { params: { poType: params.poType, userId: params.userId, userType: params.userType } })
  }

  upload(obj: any): Observable<any> {
    return this.http.post(this.baseUrl + '/rse', obj)
  }

  login(obj: any) {
    return this.http.post(this.baseUrl + '/auth/login', obj)
  }
}
