import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }
  getCustomerList():Observable<Customer[]>
  {
    let url1="http://localhost:8080/customer/all";
    return this.http.get<Customer[]>(`${url1}`); 
  }
  addCustomer(visitor:Customer):Observable<any>
  {
    let url="http://localhost:8080/customer";
    return this.http.post(`${url}`,visitor);
  }
  getEmployeebyname(firstname:string,lastname:string):Observable<any>
  {
    let url="http://localhost:8080/customer/info";
    return this.http.get(`${url}/${firstname}/${lastname}`);
  }
  updateEmployee(firstname:string,lastname:string,custom:Customer):Observable<any>
  {
    let url="http://localhost:8080/customer/update";
    return this.http.put(`${url}/${firstname}/${lastname}`,custom);
  }
  getRevenue(date:string):Observable<any>
  {
    let url="http://localhost:8080/customer";
    return this.http.get(`${url}/${date}`);
  }
  deletebyname(firstname:string,lastname:string):Observable<any>
  {
    let url="http://localhost:8080/customer/delete";
    return this.http.delete(`${url}/${firstname}/${lastname}`);
  }
  getmonthlyRevenue(date1:string,date2:string):Observable<any>
  {
    let url="http://localhost:8080/customer";
    return this.http.get(`${url}/${date1}/${date2}`);
  }
  getRatiobyday(sex:string,date:string):Observable<any>
  {
    let url="http://localhost:8080/customer/gender";
    return this.http.get(`${url}/${sex}/${date}`);
  }
  getRatiobydate(sex:string,date1:string,date2:string):Observable<any>
  {
    let url="http://localhost:8080/customer/gender";
    return this.http.get(`${url}/${sex}/${date1}/${date2}`);
  }
  getcount(fname:string,lname:string):Observable<any>
  {
    let url="http://localhost:8080/customer/count";
    return this.http.get(`${url}/${fname}/${lname}`);
  }
  
}
