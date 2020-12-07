import { Component } from "@angular/core";

@Component({
  selector: "app-siblings",
  template: "<div class='p-grid'><div class='p-col'><h2>Component1</h2><app-sibling1></app-sibling1></div><div class='p-col'><h2>Component2</h2><app-sibling2></app-sibling2></div></div>",
  styles: [""],
})
export class SiblingsComponent {

}
