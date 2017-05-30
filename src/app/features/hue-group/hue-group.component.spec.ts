import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HueGroupComponent } from './hue-group.component';

describe('HueGroupComponent', () => {
  let component: HueGroupComponent;
  let fixture: ComponentFixture<HueGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HueGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HueGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
