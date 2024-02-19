import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridHospitalComponent } from './grid-hospital.component';

describe('GridHospitalComponent', () => {
  let component: GridHospitalComponent;
  let fixture: ComponentFixture<GridHospitalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridHospitalComponent]
    });
    fixture = TestBed.createComponent(GridHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
