import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundrasierComponent } from './fundrasier.component';

describe('FundrasierComponent', () => {
  let component: FundrasierComponent;
  let fixture: ComponentFixture<FundrasierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundrasierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundrasierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
