import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeDetails} from "../model/EmployeeDetails";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }


  getById(employeeId: number) : Observable<EmployeeDetails> {
   return this.http.get<EmployeeDetails>('http://localhost:8089/employees/' + employeeId);
  }

  saveNew(employeeDetails: EmployeeDetails) : Observable<EmployeeDetails> {
    return this.http.post<EmployeeDetails>('http://localhost:8089/employees', employeeDetails);
  }

  updateById(employeeId: number, employeeDetails: EmployeeDetails) : Observable<EmployeeDetails> {
    return this.http.put<EmployeeDetails>('http://localhost:8089/employees/' + employeeId, employeeDetails);
  }

  deleteById(employeeId: number) : Observable<any> {
    return this.http.delete('http://localhost:8089/employees/' + employeeId);
  }
}
