import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent {
  @Input() childData: string='';
  @Output() childEvent = new EventEmitter<string>();

  sendToParent() {
    this.childEvent.emit('Data from Child');
  }
}
