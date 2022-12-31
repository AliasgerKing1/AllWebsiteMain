import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { PostBoxComponent } from './shared/post-box/post-box.component';
import { DelmodalComponent } from './shared/delmodal/delmodal.component';
import { EditPostComponent } from './pages/edit-post/edit-post.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { UserListComponent } from './pages/user-list/user-list.component';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CityListComponent } from './pages/city-list/city-list.component';
import { UploadComponent } from './pages/upload/upload.component';
import { ListComponent } from './pages/list/list.component';
import { ChangePasswordComponent } from './pages/change-password/change-password.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    PostBoxComponent,
    DelmodalComponent,
    EditPostComponent,
    UserListComponent,
    SingleUserComponent,
    HeaderComponent,
    FooterComponent,
    CityListComponent,
    UploadComponent,
    ListComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
})
export class UserModule {}
