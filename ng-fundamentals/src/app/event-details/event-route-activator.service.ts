import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../share/event.service';

@Injectable()
export class EventRouterActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);
    if (!eventExist) {
      this.router.navigate(['/404']);
    }
    return eventExist;
  }
}
