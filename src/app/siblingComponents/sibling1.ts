import { Component, OnInit } from "@angular/core";
import { SharedService } from "../services/shared.service";

@Component({
  selector: "app-sibling1",
  template: "<input type='text' [(ngModel)]='message' (input)='sendData()'>",
  styles: [""],
})
export class Sibling1Component implements OnInit {
  message: string = "";
  constructor(private sharedService: SharedService) {}
  sendData() {
    this.sharedService.changeMessage(this.message);
  }
  ngOnInit(): void {
    this.sharedService.currentMessage.subscribe(message => (this.message= message)); 
  }
}
