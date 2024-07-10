// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { EmployeeService } from './employee.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class EmployeeDetailResolverService implements Resolve<any> {
//   constructor(private employeeService: EmployeeService) {}

//   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
//     const id = route.paramMap.get('id');
//     if (id !== null) {
//       const employeeId = +id;
//       const employee = this.employeeService.getEmployeeById(employeeId);
//       return of({ employee });
//     } else {
//       return of({ employee: null });
//     }
//   }
// }
