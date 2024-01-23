import {Component} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  employeeForm: FormGroup;

  constructor(private routerService: RouterService,
              private employeeService: EmployeeService,
              private notificationService: NotificationService,
              private fb: FormBuilder) {
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

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.saveNew(this.employeeForm.value).subscribe(
        (newEmployee) => {
          this.notificationService.showSavedNotification();
          this.routerService.navToEmployeeList();
        },
        (error) => {
          console.error('Error creating employee:', error);
        }
      );
    }
  }
}
