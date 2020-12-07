export interface IEmp {
  id: number;
  name: string;
  mobile: number;
}
export class JsonService {
  employees: Array<IEmp> = [
    { id: 101, name: "John", mobile: 657894452489 },
    { id: 102, name: "Doe", mobile: 6587980123 },
    { id: 103, name: "Madhubabu Mynampati", mobile: 9652147117 },
  ];
  constructor() {}
  getEmployees() {
    return this.employees;
  }
  
}
