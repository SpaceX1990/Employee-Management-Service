import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router:Router) { }

  navToEmployeeList() {
    this.router.navigateByUrl("/employee");
  }

  navToEmployeeDetails(id: number) {
    this.router.navigateByUrl("/employee/" + id);
  }

  navToEmployeeCreate() {
    this.router.navigateByUrl("/employee/add");
  }

  navToEmployeeEdit(id: number) {
    this.router.navigateByUrl("/employee/edit/"+ id);
  }
}
