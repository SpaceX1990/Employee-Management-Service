import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";
import {EmployeeAddComponent} from "./employee-add/employee-add.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent},
  { path: 'employee/add', component: EmployeeAddComponent},
  { path: 'employee/edit/::employeeId', component: EmployeeEditComponent},
  { path: 'employee/::employeeId', component: EmployeeDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
