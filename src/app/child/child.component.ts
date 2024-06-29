import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>Child Component</h3>
    <p>{{childData}}</p>
    <button (click)="sendToParent()">Send Data to Parent</button>
  `
})
export class ChildComponent {
  @Input() childData: string='';
  @Output() childEvent = new EventEmitter<string>();

  sendToParent() {
    this.childEvent.emit('Data from Child');
  }
}
