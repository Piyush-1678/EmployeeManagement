import { Component } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css'],
})
export class CreateEmployeeComponent {
  step: any = 1;
  constructor() {}
  multistep=new FormGroup({
    personalDetails:new FormGroup({
      firstName:new FormControl(''),
      lastName:new FormControl(''),
      email:new FormControl(''),
      phone:new FormControl('')

    }),
    academicDetails:new FormGroup({
      qualification: new FormControl(''),
      year:new FormControl(''),
      college:new FormControl(''),
      place:new FormControl('')
    }),
    professionalDetails:new FormGroup({
      companyName: new FormControl(''),
      designation:new FormControl(''),
      startDate:new FormControl(''),
      endDate:new FormControl('')
    })
  })
  submit() {
    this.step += 1;
  }
  previous() {
    this.step -= 1;
  }
}
