import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckynumberComponent } from './luckynumber.component';

describe('LuckynumberComponent', () => {
  let component: LuckynumberComponent;
  let fixture: ComponentFixture<LuckynumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckynumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckynumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
