import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AntiAuthGuard } from './guards/anti-auth.guard';
import { AuthGuard } from './guards/auth.guard';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { CityListComponent } from './pages/city-list/city-list.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UploadComponent } from './pages/upload/upload.component';
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
      {
        path: 'city/list',
        component: CityListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'upload/list',
        component: ListComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'change/password',
        component: ChangePasswordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'forget/password',
        component: ForgetPasswordComponent,
        canActivate: [AntiAuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
