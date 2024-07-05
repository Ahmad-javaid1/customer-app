// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { ParentComponent } from './parent/parent.component';
// import { Sibling1Component } from './sibling1/sibling1.component';
// import { Sibling2Component } from './sibling2/sibling2.component';
// import { Dislocated1Component } from './dislocated1/dislocated1.component';
// import { Dislocated2Component } from './dislocated2/dislocated2.component';
// const routes: Routes = [
//   //{ path: '', redirectTo: '/parent', pathMatch: 'full' },
//   { path: 'parent', component: ParentComponent },
//   { path: 'sibling1', component: Sibling1Component },
//   { path: 'sibling2', component: Sibling2Component },
//   { path: 'dislocated1', component: Dislocated1Component },
//   { path: 'dislocated2', component: Dislocated2Component },
//   {
//     path: 'customers',
//     loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule)
//   },
//   {
//     path: 'orders',
//     loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
//   },
//   { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
//   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
//   { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
//   { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// import { Routes } from '@angular/router';
// import { AuthService } from './guards/auth.service';
// import { CanDeactivateGuard } from './guards/can-deactivate.service';

// export const routes: Routes = [
//   { path: 'home', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
//   { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent), canActivate: [AuthService] },
//   { path: 'edit', loadComponent: () => import('./edit/edit.component').then(m => m.EditComponent), canDeactivate: [CanDeactivateGuard] },
//   { path: '', redirectTo: '/home', pathMatch: 'full' }
// ];
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './guards/auth.service';
import { CanDeactivateGuard } from './guards/can-deactivate.service';

import { ParentComponent } from './parent/parent.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Dislocated1Component } from './dislocated1/dislocated1.component';
import { Dislocated2Component } from './dislocated2/dislocated2.component';
import { GriddComponent } from './gridd/gridd.component';
export const routes: Routes = [
  { path: 'parent', component: ParentComponent },
  { path: 'sibling1', component: Sibling1Component },
  { path: 'sibling2', component: Sibling2Component },
  { path: 'dislocated1', component: Dislocated1Component },
  { path: 'dislocated2', component: Dislocated2Component },
  { path: 'Grid', component: GriddComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate: [AuthService] },
  { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule), canDeactivate: [CanDeactivateGuard] },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) },
  { path: 'reports', loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }