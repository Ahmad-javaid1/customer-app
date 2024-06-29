import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-dislocated2',
  template: `
    <h3>Dislocated2 Component</h3>
    <p>{{message}}</p>
  `
})
export class Dislocated2Component implements OnInit {
  message: string='';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.message$.subscribe(msg => this.message = msg);
  }
}
