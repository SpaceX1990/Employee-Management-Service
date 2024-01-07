import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RouterService} from "../../services/router.service";
import {EmployeeDetails} from "../../model/EmployeeDetails";
import {FORM_MODE} from "../../model/FormMode";

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  editFormMode: FORM_MODE = FORM_MODE.EDIT;
  employeeId: string = '';
  employeeDetails: EmployeeDetails | null = null;

  constructor(private route:ActivatedRoute, private http: HttpClient, private routerService:RouterService) {
  }
  ngOnInit() {
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');
    if (employeeIdParam != null) {
      this.employeeId = employeeIdParam;
    }

    this.http.get<EmployeeDetails>('http://localhost:8089/employees/' + this.employeeId).subscribe(data => {
      this.employeeDetails = data;
    });

  }

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

}
