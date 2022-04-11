import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers:Customer[];
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit(): void 
  {
    this.getAll();
    
  }
  getAll() 
  {
    this.service.getCustomerList().subscribe(data=>{
      this.customers=data;
    });
    
  }
  updateCustomer(fname:string,lname:string)
  {
    this.router.navigate(['/update',fname,lname]);
  }
  deletecustomer(fname:string,lname:string)
  {
    this.router.navigate(['/delete',fname,lname]);
  }

}
