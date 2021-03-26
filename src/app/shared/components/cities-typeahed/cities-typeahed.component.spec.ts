import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesTypeahedComponent } from './cities-typeahed.component';

describe('CitiesTypeahedComponent', () => {
  let component: CitiesTypeahedComponent;
  let fixture: ComponentFixture<CitiesTypeahedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitiesTypeahedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesTypeahedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
