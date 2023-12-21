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
  searchText: string = ' ';
  displayedColumns: string[] = ['Id', 'Name', 'Street', 'Postcode', 'City', 'Phone', 'Actions'];
  dataSource = [

  ];

  // createItem() {
  //   console.log('CREATE Button wurde angeklickt!');
  //   // Hier können Sie Ihre Logik hinzufügen
  // }
  //
  // editItem(item: any) {
  //   // Handle edit action, e.g., navigate to edit page
  //   console.log('Edit item:', item);
  // }
  //
  // deleteItem(item: any) {
  //   // Handle delete action, e.g., show confirmation dialog
  //   console.log('Delete item:', item);
  // }
  // viewItem(employee: any) {
  //   // Implementieren Sie hier die Logik, um die Sichtbarkeit des Elements zu steuern.
  //   console.log('View Item:', employee);
  //   // Fügen Sie hier den Code hinzu, um die Sichtbarkeit zu steuern, z. B. API-Aufrufe oder lokale Logik.
  // }

}
