import {Component} from '@angular/core';
import {RouterService} from "../../services/router.service";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";
import {FormBuilder} from "@angular/forms";
import {EmployeeFormComponent} from "../employee-form/employee-form.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent extends EmployeeFormComponent {
  constructor(protected routerService: RouterService,
              protected employeeService: EmployeeService,
              protected notificationService: NotificationService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute
  ) {
    super(employeeService, notificationService, fb, route, routerService);
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      this.employeeService.saveNew(this.employeeForm.value).subscribe({
        next: () => {
          this.notificationService.showSavedNotification();
          this.routerService.navToEmployeeList();
        },
        error: () => {
          console.error('Error creating employee:');

        }
      })
    }
  }
}
