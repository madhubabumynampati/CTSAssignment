import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeForm } from '../forms/employee.form';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms-component',
  templateUrl: './formsComponent.component.html',
  styleUrls: ['./formsComponent.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('empTemplateForm') public empTemplateForm:NgForm;
  empForm:FormGroup;
  employee={id:"",name:"",mobileNumber:""};
  constructor(private employeeForm:EmployeeForm,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empForm=this.fb.group(this.employeeForm.getForm())
  }
  saveReactiveEmp(){
    this.empForm.markAllAsTouched();
    if(this.empForm.valid){
      // save here
    }
  }
  saveTemplateeEmp(form:FormGroup){
    form.markAllAsTouched()
    if(form.valid){
      // Sae here
    }
  }

}
