import { EventService } from './share/event.service';
import { EventThumbnailComponent } from './event-list/event-thumbnail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ToastrModule } from 'ngx-toastr';
import { EventDetailsComponent } from './event-details/event-details.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { RefErrorComponent } from './errors/ref-error/ref-error.component';
import { EventRouterActivator } from './event-details/event-route-activator.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ToastrModule.forRoot(),
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    RefErrorComponent,
  ],

  providers: [
    EventService,
    EventRouterActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('save the event first');
  }
  return true;
}
