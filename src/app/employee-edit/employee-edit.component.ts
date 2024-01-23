import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RouterService} from "../../services/router.service";
import {EmployeeModel} from "../../model/EmployeeModel";
import {FORM_MODE} from "../../model/FormMode";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  editFormMode: FORM_MODE = FORM_MODE.EDIT;
  employeeId: number | null = null;
  employeeDetails: EmployeeModel | null = null;
  changedEmployeeDetails: EmployeeModel | null = null;

  constructor(private route:ActivatedRoute, private routerService:RouterService, private employeeService: EmployeeService,
              private notificationService: NotificationService) {
  }
  ngOnInit() {
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');
    if (employeeIdParam != null) {
      this.employeeId = Number.parseInt(employeeIdParam);
    }

    if (this.employeeId != null){
      this.employeeService.getById(this.employeeId).subscribe(data => {
        this.employeeDetails = data;
      });
    }
  }

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

  onEmployeeChange(employeeDetails: EmployeeModel){
    this.changedEmployeeDetails = employeeDetails;
  }

  updateEmployee(){
    if(this.changedEmployeeDetails != null && this.employeeId != null){
      this.employeeService.updateById(this.employeeId , this.changedEmployeeDetails).subscribe(savedEmployee => {
        this.notificationService.showSavedNotification();
        this.routerService.navToEmployeeDetails(savedEmployee.id);
      });
    }
  }
}
