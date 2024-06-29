import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-sibling2',
  template: `
    <h3>Sibling2 Component</h3>
    <p>{{message}}</p>
  `
})
export class Sibling2Component implements OnInit {
  message: string='';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.message$.subscribe(msg => this.message = msg);
  }
}
