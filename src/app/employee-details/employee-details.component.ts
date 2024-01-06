import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FORM_MODE} from "../employee-form/employee-form.component";
import {RouterService} from "../../services/router.service";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(private route:ActivatedRoute, private http: HttpClient, private routerService:RouterService) {
  }

  detailsFormMode: FORM_MODE = FORM_MODE.DETAIL;
  employeeId: string = '';
  employeeDetails: EmployeeDetails | null = null;

  ngOnInit(){
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');
    if(employeeIdParam != null) {
      this.employeeId = employeeIdParam;
    }

    this.http.get<EmployeeDetails>('http://localhost:8089/employees/' + this.employeeId).subscribe(data => {
      this.employeeDetails = data;
    });

  }
// TODO dodac componenty do HTML

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }

}

export interface EmployeeDetails {
  id: number;
  lastName: string;
  firstName: string;
  street: string;
  postcode: string;
  city: string;
  phone: string;
  skillset: SkillSet[];
}

interface SkillSet{
  skill: string;
  id: number;
}
