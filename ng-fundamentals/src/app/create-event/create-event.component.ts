import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'create-event',
  template: ` <h1>New Event</h1>
    <hr />
    <div class="col-md-6">
      <h3>[Create Event Form will go here]</h3>
      <br />
      <br />
      <button class="btn btn-primary" type="submit">Save</button>
      <button class="btn btn-default" (click)="cancel()" type="button">
        Cancel
      </button>
    </div>`,
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  isDirty: boolean = true;
  constructor(private router: Router) {}
  cancel() {
    this.router.navigate(['/events']);
  }
  ngOnInit(): void {}
}
