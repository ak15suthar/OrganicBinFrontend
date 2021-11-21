import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ApplicationComponent } from './application/application.component';
import { AddapplicationComponent } from './application/addapplication/addapplication.component';
import { BlogComponent } from './blog/blog.component';
import { AddblogComponent } from './blog/addblog/addblog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ApplicationComponent,
    AddapplicationComponent,
    BlogComponent,
    AddblogComponent,
    ContactusComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    EditprofileComponent,
    ServiceComponent,
    SignupComponent,
    ViewapplicationComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
