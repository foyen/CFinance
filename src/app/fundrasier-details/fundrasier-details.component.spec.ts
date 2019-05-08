import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundrasierDetailsComponent } from './fundrasier-details.component';

describe('FundrasierDetailsComponent', () => {
  let component: FundrasierDetailsComponent;
  let fixture: ComponentFixture<FundrasierDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundrasierDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundrasierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
