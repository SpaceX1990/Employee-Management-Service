import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from "@angular/material/table";
import {Router} from "@angular/router";


export interface DanePracownikow {
  firstname: string;
  lastname: string;
  street: string;
  age: number;
  position: number;
}
const ELEMENT_DATA: DanePracownikow[] = [
  {position: 1, firstname: 'Emmanuel', lastname: 'Olisadebe', age: 45, street:'Yourmamastreet. 8'},
  {position: 2, firstname: 'Tomasz', lastname: 'Frankowski', age: 40, street:'hejkrolikustr. 15'},
];



@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent {
  searchText: string = ' ';
  displayedColumns: string[]=['position', 'firstname', 'lastname', 'age', 'street', 'action'];
  dataSource = ELEMENT_DATA;

  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient, private router: Router) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

  navToCreate() {
    this.router.navigateByUrl("employee/add");
  }

  navToDetails(position: number) {
    this.router.navigateByUrl("employee/"+position);
  }
}
