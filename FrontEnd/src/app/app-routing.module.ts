import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerCountComponent } from './customer-count/customer-count.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { HomeComponent } from './home/home.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { RatiobydateComponent } from './ratiobydate/ratiobydate.component';
import { RatiobydayComponent } from './ratiobyday/ratiobyday.component';
import { RevenueComponent } from './revenue/revenue.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [{
  path:"customer",component:CustomerListComponent},
  {path:"create-customer",component:CreateCustomerComponent},
  {path:"revenue/:date",component:RevenueComponent},
  {path:"delete/:fname/:lname",component:DeleteCustomerComponent},
  {path:'update/:fname/:lname',component:UpdateCustomerComponent},
  {path:'home',component:HomeComponent},
  {path:'dailyratio',component:RatiobydayComponent},
  {path:'monthlyrevenue',component:MonthlyComponent},
  {path:'customercount',component:CustomerCountComponent},
  {path:'ratiobydate',component:RatiobydateComponent},
  {path:"",redirectTo:"home",pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
