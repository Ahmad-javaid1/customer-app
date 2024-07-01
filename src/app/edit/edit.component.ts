import { Component } from '@angular/core';
import { CanComponentDeactivate } from '../guards/can-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements CanComponentDeactivate {
  saved: boolean = false;

  save() {
    this.saved = true;
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.saved) {
      return confirm('You have unsaved changes! Do you really want to leave?');
    }
    return true;
  }
}
