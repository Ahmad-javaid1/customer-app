// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { PopupComponent } from './popup/popup.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   constructor(private dialog: MatDialog) {}

//   openPopup() {
//     this.dialog.open(PopupComponent);
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //standalone: true,
  //imports: [MatToolbarModule, CommonModule, RouterModule, MatButtonModule, MatIconModule, ItemListComponent]
})
export class AppComponent {
  title = 'Angular CRUD Application';

  constructor(private authService: AuthService,private dialog: MatDialog) {}

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
}


