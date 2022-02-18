import { EventRouterActivator } from './event-details/event-route-activator.service';
import { RefErrorComponent } from './errors/ref-error/ref-error.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  { path: 'events', component: EventListComponent },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouterActivator],
  },
  { path: '404', component: RefErrorComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
];
