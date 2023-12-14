import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  searchText: string = ' ';
  displayedColumns: string[] = ['Id', 'Name', 'Street', 'Postcode', 'City', 'Phone', 'Actions'];
  dataSource = [
    { Id: 1, Name: 'John', Street: '123 Main St', Postcode: '12345', City: 'Example City', Phone: '555-1234', Actions: 'Edit | Delete' },
    { Id: 2, Name: 'Alice', Street: '456 Oak St', Postcode: '67890', City: 'Sample Town', Phone: '555-5678', Actions: 'Edit | Delete' },
    // Add more data as needed
  ];
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
    });
  }

}
