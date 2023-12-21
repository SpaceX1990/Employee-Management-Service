import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  addEmployee(employee: Employee): Observable<Employee>{
    return this.httpClient.post('/backend/employees', employee);
  }

}
