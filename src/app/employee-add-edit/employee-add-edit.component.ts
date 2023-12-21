import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../service/employee.service";

@Component({
  selector: 'app-employee-add-edit',
  templateUrl: './employee-add-edit.component.html',
  styleUrls: ['./employee-add-edit.component.css']
})
export class EmployeeAddEditComponent {

  employeeForm: FormGroup;


  constructor(employeeForm: FormGroup, private formbuilder: FormBuilder, private employeeService: EmployeeService
  ) {
    this.employeeForm = this.formbuilder.group({
      id: [''],
      lastName: [''],
      firstName: [''],
      street: [''],
      postcode: [''],
      city: [''],
      phone: ['']
      }
    );
  }




}
