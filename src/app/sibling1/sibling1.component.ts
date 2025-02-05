import { Component } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-sibling1',
  templateUrl: './sibling1.component.html',
  styleUrls: ['./sibling1.component.css'],
})
export class Sibling1Component {
  constructor(private communicationService: CommunicationService) {}

  sendMessage() {
    this.communicationService.sendMessage('Hello from Sibling1');
  }
}
