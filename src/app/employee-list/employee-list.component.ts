import {Component, OnInit} from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {EmployeeService} from "../service/employee.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

    dataSource = new MatTableDataSource<Employee>();
    displayedColumns: string[] = ['id', 'firstName', 'lastName', 'street', 'postcode', 'city', 'phone'];
    searchText: string = ' ';

    constructor(private http: HttpClient, private router: Router, private employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.getEmployees();
    }

    private getEmployees() {
        this.employeeService.getEmployees().subscribe(
            employeesData => {
                this.dataSource.data = employeesData;
            }
        )
    }

    createItem() {
      console.log('CREATE Button wurde angeklickt!');
      // Hier können Sie Ihre Logik hinzufügen
    }

    editItem(item: any) {
      // Handle edit action, e.g., navigate to edit page
      console.log('Edit item:', item);
    }

    deleteItem(item: any) {
      // Handle delete action, e.g., show confirmation dialog
      console.log('Delete item:', item);
    }
    viewItem(employee: any) {
      // Implementieren Sie hier die Logik, um die Sichtbarkeit des Elements zu steuern.
      console.log('View Item:', employee);
      // Fügen Sie hier den Code hinzu, um die Sichtbarkeit zu steuern, z. B. API-Aufrufe oder lokale Logik.
    }

}
