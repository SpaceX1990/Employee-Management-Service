import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup, NonNullableFormBuilder} from "@angular/forms";
import {EmployeeModel} from "../../model/EmployeeModel";
import {FORM_MODE} from "../../model/FormMode";

@Component({
  selector: 'app-employee-form',   // to !
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent {
  employeeForm: FormGroup;
  employee: EmployeeModel;

  @Input() set mode(mode: FORM_MODE) {
    switch (mode) {
      case FORM_MODE.DETAIL:
        this.setDetailMode();
        break;
      case FORM_MODE.EDIT:
        this.setAddOrEditMode();
        break;
      case FORM_MODE.ADD:
        this.setAddOrEditMode();
        break;
    }
  }

  private setAddOrEditMode() {
    this.employeeForm.controls.id.disable();
    this.employeeForm.controls.lastName.enable();
    this.employeeForm.controls.firstName.enable();
    this.employeeForm.controls.street.enable();
    this.employeeForm.controls.postcode.enable();
    this.employeeForm.controls.city.enable();
    this.employeeForm.controls.phone.enable();
    this.employeeForm.controls.skillset.enable();
  }
  private setDetailMode() {
    this.employeeForm.controls.id.disable();
    this.employeeForm.controls.lastName.disable();
    this.employeeForm.controls.firstName.disable();
    this.employeeForm.controls.street.disable();
    this.employeeForm.controls.postcode.disable();
    this.employeeForm.controls.city.disable();
    this.employeeForm.controls.phone.disable();
    this.employeeForm.controls.skillset.disable();
  }

  constructor(private readonly _fb:NonNullableFormBuilder) {
    this.employeeForm = this._fb.group({
      id: [ {value: null as number | null, disabled: true}],
      lastName: '',
      firstName: '',
      street: '',
      postcode: '',
      city: '',
      phone: '',
/*
      skillset: ''
*/
    })
    this.employeeForm.valueChanges.subscribe(value => {
      this.onChange.emit(value);
    })
  }

  @Input() set data(employee:EmployeeModel | null) {
    if (employee != null){
      this.employeeForm.setValue(employee);
    }
  }

  @Output() onChange = new EventEmitter<EmployeeModel>();
}
