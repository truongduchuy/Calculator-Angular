import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  formula: string = ''
  textButtons: string[] = ['AC', '(', ')', '/', '7', '8', '9', 'X', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']

  constructor() { }

  ngOnInit(): void {
  }

  click(event): void {
    const textButton: string = event.component.option("text")

    console.log(textButton)

    if(textButton === '=') {
      try {
        this.formula = eval(this.formula)
      }
      catch(e) {
        this.formula = 'Error'
      }
    } 
    else if(textButton === 'AC') {
      this.formula = ''
    }
    else if(textButton === 'X') {
      this.formula += '*'
    }
    else this.formula += textButton
  }
}
