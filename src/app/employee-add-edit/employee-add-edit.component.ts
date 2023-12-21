import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent implements OnInit {
  employee: Employee | undefined;
  employeeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private location: Location,
    private formbuilder: FormBuilder
  ) {
    this.employeeForm = this.formbuilder.group({
      id: [''],
      lastName: [''],
      firstName: [''],
      street: [''],
      postcode: [''],
      city: [''],
      phone: ['']
    });
  }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.employeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee;
        this.employeeForm.patchValue(employee);
      });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.employee) {
      this.employeeService.updateHero(this.employee)
        .subscribe(() => this.goBack());
    }
  }
}
