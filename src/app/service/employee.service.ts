import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "../Employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>('backend')
  }

  getEmployee(id: number): Observable<Employee> {
    return this.httpClient.get(`backend/${id}`);
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.httpClient.post('backend', employee);
  }

}
