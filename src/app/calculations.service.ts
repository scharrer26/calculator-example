import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {

  equation = "";
  lastOperator = "";
  result = "";
  currentNumber = "";

  constructor() { }

  addPercentToEquation(character: string) {
    this.lastOperator = "*";
    this.addToEquation(character);
  }

  addDotToEquation() {
    if (this.hasNumberDotCharacter()) {
      return;
    }
    this.addToEquation(".");
  }

  addToEquation(character: string) {
    if (this.isEquationEmpty()) {
      if (this.isCharacterOperator(character)) {
        return;
      }
      this.equation = this.equation.concat(character);
    } else {
      if (this.isCharacterOperator(character)) {
        if (this.isLastCharacterOperator()) {
          return;
        }
      }

      this.equation = this.equation.concat(character);
    }
  }

  calculateEquation() {
    if (this.isLastCharacterOperator()) {
      return
    }

    try {
      this.result = eval(this.equation);
    } catch {
      this.result = "Error";
    }
  }

  resetEquation() {
    this.equation = "";
    this.lastOperator = "";
    this.result = "";
    this.currentNumber = "";
  }

  removeLastCharacterFromEqaution() {
    this.equation = this.equation.slice(0, -1);
    let characterArray = this.equation.split("");

    for (let index = 0; index < characterArray.length; index++) {
      this.isCharacterOperator(characterArray[index]);
    }
  }

  changeSignOfNumber() {

    var index = this.equation.lastIndexOf(this.lastOperator);

    switch (this.lastOperator) {
      case "":
        this.changeSignOfNumberForNoOperator(index);
        break;
      case "+":
        this.changeSignOfNumberForAdditionOperator(index);
        break;
      case "-":
        this.changeSignOfNumberForSubtractionOperator(index);
        break;
      case "/":
        this.changeSignOfNumberForMultiplikationOrDivisionOperator(index);
        break;
      case "*":
        this.changeSignOfNumberForMultiplikationOrDivisionOperator(index);
        break;
      default:
        break;
    }
  }

  private isEquationEmpty() {
    return this.equation.length == 0;
  }

  private isLastCharacterOperator() {
    switch (this.equation.charAt(this.equation.length - 1)) {
      case "+":
        return true;
      case "-":
        return true;
      case "/":
        return true;
      case "*":
        return true;
      default:
        return false;
    }
  }

  private isCharacterOperator(character: string) {
    switch (character) {
      case "+":
        this.lastOperator = "+";
        return true;
      case "-":
        this.lastOperator = "-";
        return true;
      case "/":
        this.lastOperator = "/";
        return true;
      case "*":
        this.lastOperator = "*";
        return true;
      default:
        return false;
    }
  }

  private hasNumberDotCharacter() {
    let index = this.equation.lastIndexOf(this.lastOperator);

    if (this.lastOperator == "") {
      return this.equation.includes(".");
    } else {
      this.currentNumber = this.equation.substring(index, this.equation.length);
      return this.currentNumber.includes(".");
    }
  }

  private changeSignOfNumberForNoOperator(index: number) {
    this.currentNumber = this.equation.substring(index, this.equation.length);
    this.equation = "-" + this.equation;
    this.lastOperator = "-";
  }

  private changeSignOfNumberForSubtractionOperator(index: number) {
    this.currentNumber = this.equation.substring(index, this.equation.length);
    if (isNaN(Number(this.currentNumber))) {
      return;
    }
    this.currentNumber = "+" + (Number(this.currentNumber) * -1).toString();
    this.lastOperator = "+";
    this.equation = this.equation.substring(0, index) + this.currentNumber;
  }

  private changeSignOfNumberForAdditionOperator(index: number) {
    this.currentNumber = this.equation.substring(index, this.equation.length);
    this.currentNumber = "-" + Number(this.currentNumber).toString();
    if (isNaN(Number(this.currentNumber))) {
      return;
    }
    this.lastOperator = "-";
    this.equation = this.equation.substring(0, index) + this.currentNumber;
  }

  private changeSignOfNumberForMultiplikationOrDivisionOperator(index: number) {
    this.currentNumber = this.equation.substring(index + 1, this.equation.length);
    console.log(this.currentNumber);
    if ((isNaN(Number(this.currentNumber)) || this.currentNumber == "")) {
      return;
    }
    this.currentNumber = "-" + Number(this.currentNumber).toString();
    this.lastOperator = "-";
    this.equation = this.equation.substring(0, index + 1) + this.currentNumber;
  }
}
