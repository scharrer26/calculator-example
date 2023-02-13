import { Component } from '@angular/core';
import { CalculationsService } from '../calculations.service';

@Component({
  selector: 'app-ios-calculator',
  templateUrl: './ios-calculator.component.html',
  styleUrls: ['./ios-calculator.component.scss']
})
export class IosCalculatorComponent {

  constructor(public calculationsService: CalculationsService) {
  }

  updateEquation(character: string) {
    this.calculationsService.addToEquation(character);
  }

  calculateEqation() {
    this.calculationsService.calculateEquation();
  }

  resetEqation() {
    this.calculationsService.resetEquation();
  }

  removeLastCharacter() {
    this.calculationsService.removeLastCharacterFromEqaution();
  }

  addPercentToEquation(character: string){
    this.calculationsService.addPercentToEquation(character)
  }

  addDotToEquation(){
    this.calculationsService.addDotToEquation();
  }

  changeSignOfNumber() {
    this.calculationsService.changeSignOfNumber();
  }

}
