import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: '',
        component: LoginComponent,
        canActivate: [AntiAuthGuard],
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'home/edit/:id',
        component: HomeComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/list',
        component: UserListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'user/single/profile/:id',
        component: SingleUserComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
