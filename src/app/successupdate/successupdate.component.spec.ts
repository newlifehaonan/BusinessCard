import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessupdateComponent } from './successupdate.component';

describe('SuccessupdateComponent', () => {
  let component: SuccessupdateComponent;
  let fixture: ComponentFixture<SuccessupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
