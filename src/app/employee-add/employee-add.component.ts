import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {FORM_MODE} from "../../model/FormMode";
import {EmployeeModel} from "../../model/EmployeeModel";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  addFormMode: FORM_MODE = FORM_MODE.ADD;
  changedEmployeeDetails: EmployeeModel | null = null;

  constructor(private routerService:RouterService, private employeeService: EmployeeService,
              private notificationService: NotificationService) {
  }

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

  onEmployeeChange(employeeDetails: EmployeeModel){
    this.changedEmployeeDetails = employeeDetails;
  }

  saveEmployee(){
    if(this.changedEmployeeDetails != null){
      this.employeeService.saveNew(this.changedEmployeeDetails).subscribe(savedEmployee => {
        this.notificationService.showSavedNotification();
        this.routerService.navToEmployeeDetails(savedEmployee.id);
      });
    }
  }
}
