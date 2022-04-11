import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Customer } from '../customer';
import { Params } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  firstname:string;
  lastname:string;
  custom:Customer;
  customer:Customer;
  constructor(private service:CustomerService,private router:Router,private routes:ActivatedRoute) {
    
  }

  ngOnInit(): void 
  {
    this.routes.params.forEach((params: Params) => {

      this.customer=new Customer();
      this.firstname = params['fname']; 
      this.lastname = params['lname'];
    })
    this.service.getEmployeebyname(this.firstname,this.lastname).subscribe(data=>{
      console.log(data);
      this.customer=data;
    })
    alert("INITIATE DELETION OF CUSTOMER"+" "+this.firstname+" "+this.lastname+"?");
    
  }
  gotoCustomerlist()
  {
    this.router.navigate(['/customer']);
  }
  
  deletecustomer()
  {
    this.service.deletebyname(this.firstname,this.lastname).subscribe(data=>
      {
        console.log(data);
      });
      this.gotoCustomerlist();
  }
 
  onSubmit()
  {
    this.deletecustomer();
  }

}
