import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouterService} from "../../services/router.service";
import {EmployeeModel} from "../../model/EmployeeModel";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {
  employeeForm: FormGroup;
  private employeeId: number;
  private employeeModel: EmployeeModel;

  constructor(private routerService: RouterService,
              private employeeService: EmployeeService,
              private notificationService: NotificationService,
              private fb: FormBuilder,
              private route: ActivatedRoute
  ) {
    this.employeeForm = this.fb.group({
      id: [{value: '', disabled: true}],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      city: ['', Validators.required],
      phone: ['', [Validators.pattern(/^(\+?\d+[\s\-]*)+$/)]],
    });
  }

  ngOnInit() {
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');

    if (employeeIdParam != null) {
      this.employeeId = Number.parseInt(employeeIdParam);
    }

    if (this.employeeId != null) {
      this.employeeService.getById(this.employeeId).subscribe(data => {
        this.employeeModel = data;
        this.fillFormWithValues();
      });
    }
  }

  fillFormWithValues() {
    this.employeeForm.patchValue({
      id: this.employeeModel.id,
      lastName: this.employeeModel.lastName,
      firstName: this.employeeModel.firstName,
      street: this.employeeModel.street,
      postcode: this.employeeModel.postcode,
      city: this.employeeModel.city,
      phone: this.employeeModel.phone,
    });
  }

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

  updateEmployee() {
    if (this.employeeForm.valid) {
      const newEmployeeModel: EmployeeModel = this.employeeForm.value;
      this.employeeService.updateById(this.employeeId, newEmployeeModel).subscribe(savedEmployee => {
        this.notificationService.showSavedNotification();
        this.routerService.navToEmployeeDetails(savedEmployee.id);
      });
    }
  }
}
