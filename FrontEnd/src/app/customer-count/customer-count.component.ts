import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer-count',
  templateUrl: './customer-count.component.html',
  styleUrls: ['./customer-count.component.css']
})
export class CustomerCountComponent implements OnInit {

  fname:string;
  count:any;
  lname:string;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }
onSubmit()
{
  this.fname=(<HTMLInputElement>document.getElementById("firstName")).value;
    let Fname=this.fname.toString();
    this.lname=(<HTMLInputElement>document.getElementById("lastName")).value;
    let Lname=this.lname.toString();
    this.service.getcount(Fname,Lname).subscribe(data=>
      {
        this.count=data;
        alert(Fname+" "+" "+Lname+" "+"visited"+" "+this.count+" "+"times");
      })
}
}
