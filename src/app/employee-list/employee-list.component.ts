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
import {PopupService} from "../../services/popup.service";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],

})
export class EmployeeListComponent {
  searchText: string = ' ';
  displayedColumns: string[]=['id', 'firstname', 'lastname', 'street', 'postcode', 'city', 'phone', 'action'];
  dataSource: EmployeeDetails[] = [];

  constructor(private http: HttpClient,
              private routerService: RouterService,
              private popupService: PopupService,
              private employeeService: EmployeeService,
              private notificationService: NotificationService) {
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


  deleteEmployee(id: number) {
    this.popupService.openConfirmPopup().subscribe(isYes => {
      if(isYes) {
        this.employeeService.deleteById(id).subscribe( ()=> {
          this.fetchData();
          this.notificationService.showDeletedNotification();
        });
      }
    });
  }
}
