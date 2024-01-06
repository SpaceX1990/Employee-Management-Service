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
import {RouterService} from "../../services/router.service";
import {EmployeeDetails} from "../../model/EmployeeDetails";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent {
  searchText: string = ' ';
  displayedColumns: string[]=['id', 'firstname', 'lastname', 'street', 'postcode', 'city', 'phone', 'action'];
  dataSource: EmployeeDetails[] = [];

  constructor(private http: HttpClient, private routerService: RouterService) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<EmployeeDetails[]>('http://localhost:8089/employees').subscribe(data => {
      this.dataSource = data;
    })
  }

  navToCreate() {
    this.routerService.navToEmployeeCreate();
  }

  navToDetails(position: number) {
    this.routerService.navToEmployeeDetails(position);
  }

  navToEdit(position: number) {
    this.routerService.navToEmployeeEdit(position);
  }
}
