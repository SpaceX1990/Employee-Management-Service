import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouterService} from "../../services/router.service";
import {EmployeeModel} from "../../model/EmployeeModel";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";
import {FormBuilder} from "@angular/forms";
import {EmployeeFormComponent} from "../employee-form/employee-form.component";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent extends EmployeeFormComponent {
  constructor(
    protected routerService: RouterService,
    protected employeeService: EmployeeService,
    protected notificationService: NotificationService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute
  ) {
    super(employeeService, notificationService, fb, route, routerService);
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
