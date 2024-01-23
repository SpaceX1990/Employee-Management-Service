import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouterService} from "../../services/router.service";
import {EmployeeService} from "../../services/employee.service";
import {FormBuilder} from "@angular/forms";
import {NotificationService} from "../../services/notification.service";
import {EmployeeFormComponent} from "../employee-form/employee-form.component";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent extends EmployeeFormComponent {
  constructor(protected routerService: RouterService,
              protected employeeService: EmployeeService,
              protected notificationService: NotificationService,
              protected fb: FormBuilder,
              protected route: ActivatedRoute
  ) {
    super(employeeService, notificationService, fb, route, routerService);
  }
}

