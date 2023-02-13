import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IosCalculatorComponent } from './ios-calculator.component';

describe('IosCalculatorComponent', () => {
  let component: IosCalculatorComponent;
  let fixture: ComponentFixture<IosCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IosCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IosCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
