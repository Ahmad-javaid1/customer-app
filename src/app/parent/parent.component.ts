import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
    <h2>Parent Component</h2>
    <app-child [childData]="parentData" (childEvent)="receiveChildEvent($event)"></app-child>
    <p>Received from Child: {{receivedData}}</p>
  `
})
export class ParentComponent {
  parentData = 'Data from Parent';
  receivedData: string='';

  receiveChildEvent(data: string) {
    this.receivedData = data;
  }
}
