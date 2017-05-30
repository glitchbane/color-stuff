import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HueGeneratorComponent } from './hue-generator.component';

describe('HueGeneratorComponent', () => {
  let component: HueGeneratorComponent;
  let fixture: ComponentFixture<HueGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HueGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HueGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
