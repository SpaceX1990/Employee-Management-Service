import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeFormComponent} from "./employee-add-edit/employee-form.component";

const routes: Routes = [
  {path: 'employee', component: EmployeeListComponent},
  {path: 'details/:id', component: EmployeeFormComponent},
  {path: 'details', component: EmployeeFormComponent},
  {path: '', redirectTo: '/employee', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
