// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatDialogModule } from '@angular/material/dialog';
// import { AppRoutingModule } from './app-routing.module';

// import { AppComponent } from './app.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
// import { EmployeeService } from './employee.service';
// import { ParentComponent } from './parent/parent.component';
// import { ChildComponent } from './child/child.component';
// import { FormsModule } from '@angular/forms';
// import { Sibling1Component } from './sibling1/sibling1.component';
// import { Sibling2Component } from './sibling2/sibling2.component';
// import { Dislocated1Component } from './dislocated1/dislocated1.component';
// import { Dislocated2Component } from './dislocated2/dislocated2.component';
// import { PopupComponent } from './popup/popup.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     EmployeeListComponent,
//     EmployeeDetailComponent,
//     ParentComponent,
//     ChildComponent,
//     Sibling1Component,
//     Sibling2Component,
//     Dislocated1Component,
//     Dislocated2Component,
//     PopupComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule,
//     MatDialogModule
//   ],
//   providers: [EmployeeService],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { HttpClientModule } from '@angular/common/http';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatButtonModule } from '@angular/material/button';
// import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material/icon';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { ApiService } from './api.service'; // Import ApiService from api.ts
// import { AuthService } from './guards/auth.service';
// import { CanDeactivateGuard } from './guards/can-deactivate.service';

// @NgModule({
//   imports: [
//     BrowserModule,
//     BrowserAnimationsModule,
//     HttpClientModule,
//     MatSnackBarModule,
//     MatButtonModule,
//     MatListModule,
//     MatIconModule,
//     MatToolbarModule
//   ],
//   providers: [
//     AuthService,
//     CanDeactivateGuard,
//     ApiService
//   ],
//   bootstrap: []
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms'; // If FormsModule is needed

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Sibling1Component } from './sibling1/sibling1.component';
import { Sibling2Component } from './sibling2/sibling2.component';
import { Dislocated1Component } from './dislocated1/dislocated1.component';
import { Dislocated2Component } from './dislocated2/dislocated2.component';
import { PopupComponent } from './popup/popup.component';

import { ApiService } from './api.service'; // Import ApiService from api.ts
import { AuthService } from './guards/auth.service';
import { CanDeactivateGuard } from './guards/can-deactivate.service';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    ParentComponent,
    ChildComponent,
    Sibling1Component,
    Sibling2Component,
    Dislocated1Component,
    Dislocated2Component,
    PopupComponent,
    ItemListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    FormsModule, // Add FormsModule if needed for template-driven forms
    AppRoutingModule // Make sure AppRoutingModule is imported
  ],
  providers: [
    EmployeeService,
    ApiService, // Add ApiService to providers
    AuthService,
    CanDeactivateGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
