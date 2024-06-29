import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  template: `
    <h3>Popup Component</h3>
    <button (click)="close()">Close</button>
  `
})
export class PopupComponent {
  constructor(private dialogRef: MatDialogRef<PopupComponent>) {}

  close() {
    this.dialogRef.close();
  }
}
