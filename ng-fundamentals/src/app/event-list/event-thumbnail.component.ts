import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: ` <div
    [routerLink]="['/events', event.id]"
    class="well hoverwell thumbnail"
  >
    <h2 class="name">{{ event.name }}</h2>

    <div>Date: {{ event.date }}</div>
    <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span
      ><span *ngSwitchDefault>(Normal Start)</span>
    </div>
    <div>Time: {{ event.time }}</div>
    <div>Price: \${{ event.price }}</div>
    <div>Date: {{ event.date }}</div>
    <div>
      <span>Location: {{ event.location.address }}</span>

      <span class="pad-left"
        >{{ event.location.city }}, {{ event.location.country }}</span
      >
    </div>
  </div>`,
  styles: [
    `
      .pad-left {
        padding-left: 5px;
      }
      .well div {
        color: #bbb;
      }
      .well {
        min-height: 240px;
      }
      .well .green {
        color: green;
      }
      .bold {
        font-weight: bold;
      }
    `,
  ],
})
export class EventThumbnailComponent {
  @Input() event: any;

  getStartTimeClass() {
    const isEarlyStart = this.event.time === '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
