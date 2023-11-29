import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallStatusComponent } from './overall-status.component';

describe('OverallStatusComponent', () => {
  let component: OverallStatusComponent;
  let fixture: ComponentFixture<OverallStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverallStatusComponent]
    });
    fixture = TestBed.createComponent(OverallStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
