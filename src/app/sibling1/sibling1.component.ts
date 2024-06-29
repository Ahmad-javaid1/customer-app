import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-sibling1',
  template: `
    <h3>Sibling1 Component</h3>
    <button (click)="sendMessage()">Send Message to Sibling2</button>
  `
})
export class Sibling1Component {
  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.sendMessage('Hello from Sibling1');
  }
}
