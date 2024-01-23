import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {EmployeeModel} from "../model/EmployeeModel";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>('/backend');
  }

  getById(employeeId: number): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>('/backend' + employeeId);
  }


  saveNew(employeeDetails: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>('/backend', employeeDetails);
  }

  updateById(employeeId: number, employeeModel: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>('/backend' + employeeId, employeeModel);
  }

  deleteById(employeeId: number): Observable<any> {
    return this.http.delete('/backend/' + employeeId);
  }
}
