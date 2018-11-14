import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnapreviewComponent } from './snapreview.component';

describe('SnapreviewComponent', () => {
  let component: SnapreviewComponent;
  let fixture: ComponentFixture<SnapreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnapreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnapreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
