import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavTogglerComponent } from './side-nav-toggler.component';

describe('SideNavTogglerComponent', () => {
  let component: SideNavTogglerComponent;
  let fixture: ComponentFixture<SideNavTogglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideNavTogglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavTogglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
