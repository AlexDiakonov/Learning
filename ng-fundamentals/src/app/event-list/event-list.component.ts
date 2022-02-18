import { EventService } from '../share/event.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  styleUrls: ['./event-list.component.css'],
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5 event-items">
          <event-thumbnail
            (click)="handleClick(event.name)"
            #thumbnail
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventListComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }
  handleClick(eventName: string) {
    this.toastr.success(eventName);
  }
}
