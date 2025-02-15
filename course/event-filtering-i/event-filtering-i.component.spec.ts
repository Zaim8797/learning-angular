import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilteringIComponent } from './event-filtering-i.component';

describe('EventFilteringIComponent', () => {
  let component: EventFilteringIComponent;
  let fixture: ComponentFixture<EventFilteringIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFilteringIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFilteringIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
