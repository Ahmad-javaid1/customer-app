import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-sibling2',
  templateUrl: './sibling2.component.html',
  styleUrls: ['./sibling2.component.css'],
})
export class Sibling2Component implements OnInit {
  message: string='';

  constructor(private communicationService: CommunicationService) {}

  ngOnInit() {
    this.communicationService.message$.subscribe(msg => this.message = msg);
  }
}
