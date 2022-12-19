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
