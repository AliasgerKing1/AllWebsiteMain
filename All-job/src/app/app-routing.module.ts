import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const routes: Routes = [
  {
    path: "employee",
    loadChildren: ()=>import("./employee/employee.module").then(e=>e.EmployeeModule)
  },
  {
    path: "recruiter",
    loadChildren: ()=>import("./recruiter/recruiter.module").then(r=>r.RecruiterModule)
  },
  {
    path : "**",
    component: ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
