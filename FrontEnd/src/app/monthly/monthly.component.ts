import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css']
})
export class MonthlyComponent implements OnInit {

  d1:string;
  d2:string;
  revenue:any;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }

onSubmit()
{
  this.d1=(<HTMLInputElement>document.getElementById("d1")).value;
  this.d2=(<HTMLInputElement>document.getElementById("d2")).value;
  console.log(this.d1,this.d2);
  this.service.getmonthlyRevenue(this.d2,this.d1).subscribe(data=>
    {
      console.log(data);
      this.revenue=data;
      alert("REVENUE GENERATED BETWEEN "+" "+this.d1+" "+"AND"+" "+this.d2+" "+" is"+" "+this.revenue);
      location.reload();
    })
}
}
