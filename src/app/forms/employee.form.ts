import { Injectable, Attribute } from "@angular/core";
import { Validators } from "@angular/forms";

@Injectable()
export class EmployeeForm {
  getForm() {
   
    return {
        id:["",Validators.required],
        name:["",Validators.required],
        mobileNumber:[,[Validators.pattern('^[6-9]{1}[0-9]{9}$'),Validators.required]]
      };
  }
}
