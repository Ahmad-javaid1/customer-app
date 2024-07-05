import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-dislocated2',
  templateUrl: './dislocated2.component.html',
  styleUrls: ['./dislocated2.component.css'],
})
export class Dislocated2Component implements OnInit {
  message: string='';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.message$.subscribe(msg => this.message = msg);
  }
}
