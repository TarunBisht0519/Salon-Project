import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Params } from '@angular/router';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id:number;
  customer:Customer=new Customer();
  firstname:string;
  lastname:string;
  constructor(private service:CustomerService,private routes:ActivatedRoute,private router:Router) { 
    this.routes.params.subscribe( params => console.log(params) );
  }

  ngOnInit(): void 
  {
  this.routes.params.forEach((params: Params) => {

    this.firstname = params['fname']; // get the id from url
    this.lastname = params['lname'];
    console.log(this.firstname,this.lastname)
  })
  }
  gotoCustomerlist()
  {
    this.router.navigate(['/customer']);
  }
  
 onSubmit()
 {
   return this.service.updateEmployee(this.firstname,this.lastname,this.customer).subscribe(data=>
    {
      console.log(this.firstname);
      console.log(this.customer);
      this.gotoCustomerlist();   
    })
 }
 
}
