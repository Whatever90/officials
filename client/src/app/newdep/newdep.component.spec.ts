import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdepComponent } from './newdep.component';

describe('NewdepComponent', () => {
  let component: NewdepComponent;
  let fixture: ComponentFixture<NewdepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewdepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewdepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
