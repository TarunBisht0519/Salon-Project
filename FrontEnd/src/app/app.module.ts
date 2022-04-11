import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HttpClientModule, HttpParams } from "@angular/common/http";
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { FormsModule } from '@angular/forms';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { RevenueComponent } from './revenue/revenue.component';
import { DeleteCustomerComponent } from './delete-customer/delete-customer.component';
import { HomeComponent } from './home/home.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { RatiobydayComponent } from './ratiobyday/ratiobyday.component';
import { RatiobydateComponent } from './ratiobydate/ratiobydate.component';
import { CustomerCountComponent } from './customer-count/customer-count.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    UpdateCustomerComponent,
    RevenueComponent,
    DeleteCustomerComponent,
    HomeComponent,
    MonthlyComponent,
    RatiobydayComponent,
    RatiobydateComponent,
    CustomerCountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
