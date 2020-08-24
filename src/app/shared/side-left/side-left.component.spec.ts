import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideLeftComponent } from './side-left.component';

describe('SideLeftComponent', () => {
  let component: SideLeftComponent;
  let fixture: ComponentFixture<SideLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
