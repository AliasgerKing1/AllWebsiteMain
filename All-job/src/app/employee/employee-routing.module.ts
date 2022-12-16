import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './pages/home/home.component';
import { JobListComponent } from './pages/job-list/job-list.component';

const routes: Routes = [
  {
    path: '',
    component : EmployeeComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "job/list",
        component: JobListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
