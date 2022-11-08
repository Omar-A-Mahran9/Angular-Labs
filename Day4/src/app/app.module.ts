import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { StudentsComponent } from './components/students/students.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorComponent } from './components/error/error.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user-details/:id', component: UserDetailsComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'error', component: ErrorComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    StudentsComponent,
    HeaderComponent,
    UserDetailsComponent,
    ProfileComponent,
    ErrorComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
