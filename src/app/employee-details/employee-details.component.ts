import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {RouterService} from "../../services/router.service";
import {EmployeeDetails} from "../../model/EmployeeDetails";
import {FORM_MODE} from "../../model/FormMode";
import {EmployeeService} from "../../services/employee.service";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(private route:ActivatedRoute, private http: HttpClient, private routerService:RouterService,
              private employeeService: EmployeeService) {
  }

  detailsFormMode: FORM_MODE = FORM_MODE.DETAIL;
  employeeId: number | null = null;
  employeeDetails: EmployeeDetails | null = null;

  ngOnInit(){
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');
    if(employeeIdParam != null) {
      this.employeeId = Number.parseInt(employeeIdParam);
    }
    if (this.employeeId != null){
      this.employeeService.getById(this.employeeId).subscribe(data => {
        this.employeeDetails = data;
      });
    }


  }
// TODO dodac componenty do HTML

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

}

