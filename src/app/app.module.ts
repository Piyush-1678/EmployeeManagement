import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './Components/Admin/create-employee/create-employee.component';
import { ManageEmployeeComponent } from './Components/Admin/manage-employee/manage-employee.component';
import { ManagerHomePageComponent } from './Components/Manager/manager-home-page/manager-home-page.component';
import { EmployeeHomePageComponent } from './Components/Employee/employee-home-page/employee-home-page.component';
import { ManagerLoginComponent } from './Components/Login/manager-login/manager-login.component';
import { EmployeeLoginComponent } from './Components/Login/employee-login/employee-login.component';
import { AdminLoginComponent } from './Components/Login/admin-login/admin-login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    ManageEmployeeComponent,
    ManagerHomePageComponent,
    EmployeeHomePageComponent,
    ManagerLoginComponent,
    EmployeeLoginComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
