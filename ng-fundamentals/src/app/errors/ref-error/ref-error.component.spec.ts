import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefErrorComponent } from './ref-error.component';

describe('RefErrorComponent', () => {
  let component: RefErrorComponent;
  let fixture: ComponentFixture<RefErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RefErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RefErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
