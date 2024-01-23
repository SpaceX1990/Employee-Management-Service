import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EmployeeModel} from "../../model/EmployeeModel";
import {EmployeeService} from "../../services/employee.service";
import {NotificationService} from "../../services/notification.service";
import {ActivatedRoute} from "@angular/router";
import {RouterService} from "../../services/router.service";

@Component({
  selector: 'app-employee-form',   // to !
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  employeeId: number;
  employeeModel: EmployeeModel;

  constructor(
    protected employeeService: EmployeeService,
    protected notificationService: NotificationService,
    protected fb: FormBuilder,
    protected route: ActivatedRoute,
    protected routerService: RouterService
  ) {
    this.employeeForm = this.fb.group({
      id: [{value: '', disabled: true}],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      street: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]],
      city: ['', Validators.required],
      phone: ['', [Validators.pattern(/^(\+?\d+[\s\-]*)+$/)]],
    });
  }

  ngOnInit() {
    let employeeIdParam = this.route.snapshot.paramMap.get(':employeeId');

    if (employeeIdParam != null) {
      this.employeeId = Number.parseInt(employeeIdParam);
    }

    if (this.employeeId != null) {
      this.employeeService.getById(this.employeeId).subscribe(data => {
        this.employeeModel = data;
        this.fillFormWithValues();
      });
    }
  }

  fillFormWithValues() {
    this.employeeForm.patchValue({
      id: this.employeeModel.id,
      lastName: this.employeeModel.lastName,
      firstName: this.employeeModel.firstName,
      street: this.employeeModel.street,
      postcode: this.employeeModel.postcode,
      city: this.employeeModel.city,
      phone: this.employeeModel.phone,
    });
  }

  navToMainMenu() {
    this.routerService.navToEmployeeList();
  }
}
