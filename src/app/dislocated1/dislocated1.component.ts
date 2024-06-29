import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-dislocated1',
  template: `
    <h3>Dislocated1 Component</h3>
    <button (click)="sendMessage()">Send Message to Dislocated2</button>
  `
})
export class Dislocated1Component {
  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.sendMessage('Hello from Dislocated1');
  }
}
