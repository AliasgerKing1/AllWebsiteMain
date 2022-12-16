import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PostJobComponent } from './pages/post-job/post-job.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "job/post",
    component : PostJobComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
