import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventFilteringIIComponent } from './event-filtering-ii.component';

describe('EventFilteringIIComponent', () => {
  let component: EventFilteringIIComponent;
  let fixture: ComponentFixture<EventFilteringIIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventFilteringIIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFilteringIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
