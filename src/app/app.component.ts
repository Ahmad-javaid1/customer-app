// import { Component } from '@angular/core';
// import { AuthService } from './guards/auth.service';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { CommonModule } from '@angular/common';
// import { RouterModule } from '@angular/router';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { ItemListComponent } from './item-list/item-list.component';
// import { PopupComponent } from './popup/popup.component';
// import { MatDialog } from '@angular/material/dialog';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
//   //standalone: true,
//   //imports: [MatToolbarModule, CommonModule, RouterModule, MatButtonModule, MatIconModule, ItemListComponent]
// })
// export class AppComponent {
//   title = 'Angular CRUD Application';

//   constructor(private authService: AuthService,private dialog: MatDialog) {}

//   login() {
//     this.authService.login();
//   }

//   logout() {
//     this.authService.logout();
//   }

//   isLoggedIn(): boolean {
//     return this.authService.isLoggedIn();
//   }
  

//   openPopup() {
//    this.dialog.open(PopupComponent);
//   }
// }

import { Component } from '@angular/core';
import { AuthService } from './guards/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ItemListComponent } from './item-list/item-list.component';
import { PopupComponent } from './popup/popup.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from '../environments/environment';
import {MatBadgeModule} from '@angular/material/badge';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
  // imports: [MatToolbarModule, CommonModule, RouterModule, MatButtonModule, MatIconModule, ItemListComponent]
})
export class AppComponent {
  title = 'Angular CRUD Application';
  apiUrl = environment.apiUrl;

  constructor(private authService: AuthService, private dialog: MatDialog,private router: Router) {}

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  openPopup() {
    this.dialog.open(PopupComponent);
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  navigateToItemsList() {
    // Navigate to the items list route (adjust '/items-list' as per your route)
    this.router.navigate(['/itemlist']);
  }
  navigateToEmployeeList() {
      // Navigate to the employee list route (adjust '/employee-list' as per your route)
      this.router.navigate(['/employee-list']);
    }
  
  navigateToEmployeeDetail() {
      // Navigate to the employee detail route (adjust '/employee-detail' as per your route)
      this.router.navigate(['/employee-detail']);
    }
}

