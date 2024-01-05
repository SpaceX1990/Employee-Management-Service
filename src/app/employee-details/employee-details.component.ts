import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  constructor(private route:ActivatedRoute, private http: HttpClient) {
  }
  employeeId: string = '';
  employee: EmployeeDetails | undefined;
  ngOnInit(){
    console.log('heeej kruliku, w szaaaaaarej mgöeeeej');
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');
    console.log(this.route.snapshot.paramMap);
    if(employeeIdParam != null) {
      this.employeeId = employeeIdParam;
    }

    this.http.get<EmployeeDetails>('http://localhost:8089/employees/' + employeeIdParam).subscribe(data => {
      this.employee = data;
    });

  }
// TODO dodac componenty do HTML



}

interface EmployeeDetails {
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
