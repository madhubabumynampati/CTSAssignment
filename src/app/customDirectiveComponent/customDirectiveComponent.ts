import { Component, OnInit } from '@angular/core';
import { JsonService, IEmp } from '../services/json.service';

@Component({
  selector: 'app-custom-directive-component',
  templateUrl: './customDirectiveComponent.html',
  styles:['.table{width: 100%;  margin-bottom: 1rem;  color: #212529;border-collapse: collapse;text-align:center;}']
})
export class CustomDirectiveComponent implements OnInit {
  phoneNumber;
  employees:Array<any>=[]
  selectedEmp:IEmp;
  constructor(private jsonService:JsonService) { }

  ngOnInit(): void {
    this.getEmployees()
  }
  getEmployees() {
    this.employees = this.jsonService.getEmployees();
  }

}
