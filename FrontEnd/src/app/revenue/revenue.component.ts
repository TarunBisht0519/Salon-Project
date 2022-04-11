
import { Component, ElementRef, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import * as moment from 'moment';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {
  date:any;
  d:string;
  date2:Date;
  formatteddate:any;
  revenue:any;
  customer:Customer;
  constructor(private service:CustomerService) { }

  ngOnInit(): void 
  {

  }
  onSubmit()
  {
    this.d=(<HTMLInputElement>document.getElementById("dates")).value;
    this.date=new Date(this.d);
    console.log(this.d);
    this.service.getRevenue(this.d).subscribe(data=>
      {
        this.revenue=data;
        alert("REVENUE GENERATED ON "+" "+this.d+" "+" is"+" "+this.revenue);
        location.reload();
      })
  }
}
