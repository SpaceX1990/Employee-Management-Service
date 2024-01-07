import { Component } from '@angular/core';
import {RouterService} from "../../services/router.service";
import {FORM_MODE} from "../../model/FormMode";

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  addFormMode: FORM_MODE = FORM_MODE.ADD;

  constructor(private routerService:RouterService) {
  }

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

}
