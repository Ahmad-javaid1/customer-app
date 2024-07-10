import { Injectable } from '@angular/core';
@Injectable()
export class EmployeeService {


  constructor() { }

  getEmployees(){
    return[
      {"id": 111, "name": "Alina", "age": 40},
      {"id": 211, "name": "Burhan", "age": 25},
      {"id": 321, "name": "Zaki", "age": 16},
      {"id": 412, "name": "karen", "age": 18},
      {"id": 523, "name": "Anarkali", "age": 25}    
    ];
  }
  // getEmployeeById(id: number) {
  //   return this.getEmployees().find(employee => employee.id === id);
  // }
}