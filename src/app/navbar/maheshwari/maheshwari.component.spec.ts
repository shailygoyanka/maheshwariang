import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaheshwariComponent } from './maheshwari.component';

describe('MaheshwariComponent', () => {
  let component: MaheshwariComponent;
  let fixture: ComponentFixture<MaheshwariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaheshwariComponent]
    });
    fixture = TestBed.createComponent(MaheshwariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
