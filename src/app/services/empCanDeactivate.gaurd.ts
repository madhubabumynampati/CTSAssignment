import { CanDeactivate } from "@angular/router";
import { FormsComponent } from "../formsComponent/formsComponent.component";

export class EmployeeDeActivateService
  implements CanDeactivate<FormsComponent> {
  canDeactivate(component: FormsComponent): boolean {
    if (component.empTemplateForm.dirty || component.empForm.dirty) {
      return confirm("Are you sure you want to discard your changes?");
    }

    return true;
  }
}
