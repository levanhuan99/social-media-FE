import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSideleftComponent } from './user-sideleft.component';

describe('UserSideleftComponent', () => {
  let component: UserSideleftComponent;
  let fixture: ComponentFixture<UserSideleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSideleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSideleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
