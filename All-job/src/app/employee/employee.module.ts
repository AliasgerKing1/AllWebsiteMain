import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { EmployeeComponent } from './employee.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { JobListComponent } from './pages/job-list/job-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    EmployeeComponent,
    HeaderComponent,
    FooterComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
