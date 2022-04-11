import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-ratiobyday',
  templateUrl: './ratiobyday.component.html',
  styleUrls: ['./ratiobyday.component.css']
})
export class RatiobydayComponent implements OnInit {
  date1:string;
  sex:string;
  ratio:any;
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    this.sex=(<HTMLInputElement>document.getElementById("g1")).value;
    let sex2=this.sex.toString();
    this.date1=(<HTMLInputElement>document.getElementById("d1")).value;
    console.log(sex2,this.date1);
    this.service.getRatiobyday(this.sex,this.date1).subscribe(data=>
      {
        this.ratio=data;
        if(sex2=="m"|| sex2=="M")
        {
          alert("NUMBER OF MALES THAT VISITED THE SALON :"+" "+this.ratio);
        }
        if(sex2=="f"|| sex2=="F")
        {
          alert("NUMBER OF FEMALES THAT VISITED THE SALON :"+" "+this.ratio);
        }
      })

  }
}
