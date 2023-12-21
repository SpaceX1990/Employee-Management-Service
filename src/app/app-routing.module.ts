import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeAddEditComponent} from "./employee-add-edit/employee-add-edit.component";

const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent},
  {path: 'details/:id', component: EmployeeAddEditComponent},
  {path: 'details', component: EmployeeAddEditComponent},
  {path: '', redirectTo: '/employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
