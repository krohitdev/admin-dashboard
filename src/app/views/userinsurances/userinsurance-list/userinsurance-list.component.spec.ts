import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinsuranceListComponent } from './userinsurance-list.component';

describe('UserinsuranceListComponent', () => {
  let component: UserinsuranceListComponent;
  let fixture: ComponentFixture<UserinsuranceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserinsuranceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinsuranceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
