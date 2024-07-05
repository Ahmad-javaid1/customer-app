import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  parentData = 'Data from Parent';
  receivedData: string='';

  receiveChildEvent(data: string) {
    this.receivedData = data;
  }
}
