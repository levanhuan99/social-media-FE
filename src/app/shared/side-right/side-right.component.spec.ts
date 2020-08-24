import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRightComponent } from './side-right.component';

describe('SideRightComponent', () => {
  let component: SideRightComponent;
  let fixture: ComponentFixture<SideRightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideRightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
