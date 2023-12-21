import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {EmployeeService} from "../service/employee.service";
import {MatTableDataSource} from "@angular/material/table";

@Component({
    selector: 'app-employee-list',
    templateUrl: './employee-list.component.html',
    styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

    dataSource = new MatTableDataSource<Employee>();
    displayedColumns: string[] = ['id', 'lastName', 'firstName',  'street', 'postcode', 'city', 'phone'];

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
}
