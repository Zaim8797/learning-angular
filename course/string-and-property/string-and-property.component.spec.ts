import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringAndPropertyComponent } from './string-and-property.component';

describe('StringAndPropertyComponent', () => {
  let component: StringAndPropertyComponent;
  let fixture: ComponentFixture<StringAndPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StringAndPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringAndPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
