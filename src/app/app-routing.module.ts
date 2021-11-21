import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddapplicationComponent } from './application/addapplication/addapplication.component';
import { ApplicationComponent } from './application/application.component';
import { AddblogComponent } from './blog/addblog/addblog.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceComponent } from './service/service.component';
import { SignupComponent } from './signup/signup.component';
import { TeamComponent } from './team/team.component';
import { ViewapplicationComponent } from './viewapplication/viewapplication.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'application', component: ApplicationComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'applyapplication', component: AddapplicationComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'addblog', component: AddblogComponent },
  { path: 'viewapplication', component: ViewapplicationComponent },
  { path: 'team', component: TeamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
