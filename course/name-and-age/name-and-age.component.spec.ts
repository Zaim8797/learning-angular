import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameAndAgeComponent } from './name-and-age.component';

describe('NameAndAgeComponent', () => {
  let component: NameAndAgeComponent;
  let fixture: ComponentFixture<NameAndAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NameAndAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NameAndAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
