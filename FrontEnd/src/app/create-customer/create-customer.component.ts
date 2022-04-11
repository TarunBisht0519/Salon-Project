import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customer:Customer=new Customer();
  constructor(private service:CustomerService,private router:Router) { }

  ngOnInit(): void {

  }
  postCustomer()
  {
    this.service.addCustomer(this.customer).subscribe(data=>{
      console.log(data);
    },error=>console.log(error));
    alert("CUSTOMER ADDED SUCCESFULLY");
    this.gotoCustomerlist();
    
  }
  gotoCustomerlist()
  {
    this.router.navigate(['/customer']);
  }
  onSubmit()
  {
    this.postCustomer();
  }
}
