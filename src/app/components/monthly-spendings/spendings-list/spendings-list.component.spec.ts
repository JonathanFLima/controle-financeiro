import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendingsListComponent } from './spendings-list.component';

describe('SpendingsListComponent', () => {
  let component: SpendingsListComponent;
  let fixture: ComponentFixture<SpendingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpendingsListComponent]
    });
    fixture = TestBed.createComponent(SpendingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
