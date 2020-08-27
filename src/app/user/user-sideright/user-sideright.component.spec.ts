import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSiderightComponent } from './user-sideright.component';

describe('UserSiderightComponent', () => {
  let component: UserSiderightComponent;
  let fixture: ComponentFixture<UserSiderightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSiderightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSiderightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
