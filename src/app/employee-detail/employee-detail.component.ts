import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css'],
})
export class EmployeeDetailComponent implements OnInit {

  public employees: { id: number, name: string, age: number }[] = [];
  
  constructor(private _employeeService: EmployeeService) { }
  
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }
}
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { EmployeeService } from './../employee.service';

// @Component({
//   selector: 'employee-detail',
//   templateUrl: './employee-detail.component.html',
//   styleUrls: ['./employee-detail.component.css'],
// })
// export class EmployeeDetailComponent implements OnInit {

//   public employee: { id: number, name: string, age: number } | null = null;

//   constructor(private route: ActivatedRoute, private _employeeService: EmployeeService) { }
  
//   ngOnInit() {
//     this.route.data.subscribe(data => {
//       this.employee = data['employee'];
//     });
//   }
// }

