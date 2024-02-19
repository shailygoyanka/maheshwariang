import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListyourbusinessComponent } from './listyourbusiness.component';

describe('ListyourbusinessComponent', () => {
  let component: ListyourbusinessComponent;
  let fixture: ComponentFixture<ListyourbusinessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListyourbusinessComponent]
    });
    fixture = TestBed.createComponent(ListyourbusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
