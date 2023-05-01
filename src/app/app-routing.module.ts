import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './Components/Login/admin-login/admin-login.component';
import { CreateEmployeeComponent } from './Components/Admin/create-employee/create-employee.component';

const routes: Routes = [
  {
    path:"admin-login",
    component:AdminLoginComponent
  },
  {
    path:"create-user",
    component:CreateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
