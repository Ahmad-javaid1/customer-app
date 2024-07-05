import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-dislocated1',
  templateUrl: './dislocated1.component.html',
  styleUrls: ['./dislocated1.component.css'],
})
export class Dislocated1Component {
  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.sendMessage('Hello from Dislocated1');
  }
}
