import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTopbarComponent } from './user-topbar.component';

describe('UserTopbarComponent', () => {
  let component: UserTopbarComponent;
  let fixture: ComponentFixture<UserTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
