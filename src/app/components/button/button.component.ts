import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

import { ButtonInterface } from "../../interfaces/button.interface";
import { buttonFixture } from "../../fixtures/button.fixture";

/**
 * Angular decorator
 */
@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  /**
   * Label for button
   */
  button: ButtonInterface;

  /**
   * Number received
   */
  @Input() number: string;

  /**
   * Number emited
   */
  @Output() lastNumberEmitter = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.button = buttonFixture;
  }

  handleNumber = () => {
    // 4321876509871237
    if (this.number.length < 14 || this.number.length < 16) {
      return;
    } else {
      const numbersArray = this.number.split("");
      const oneInstancies = numbersArray.filter((number) => number === "1");
      const twoInstancies = numbersArray.filter((number) => number === "2");
      const threeInstancies = numbersArray.filter((number) => number === "3");
      const fourInstancies = numbersArray.filter((number) => number === "4");
      const fiveInstancies = numbersArray.filter((number) => number === "5");
      const sixInstancies = numbersArray.filter((number) => number === "6");
      const sevenInstancies = numbersArray.filter((number) => number === "7");
      const eightInstancies = numbersArray.filter((number) => number === "8");
      const nineInstancies = numbersArray.filter((number) => number === "9");
      console.log('The 1 was repeated ', oneInstancies.length, ' times');
      console.log('The 2 was repeated ', twoInstancies.length, ' times');
      console.log('The 3 was repeated ', threeInstancies.length, ' times');
      console.log('The 4 was repeated ', fourInstancies.length, ' times');
      console.log('The 5 was repeated ', fiveInstancies.length, ' times');
      console.log('The 6 was repeated ', sixInstancies.length, ' times');
      console.log('The 7 was repeated ', sevenInstancies.length, ' times');
      console.log('The 8 was repeated ', eightInstancies.length, ' times');
      console.log('The 9 was repeated ', nineInstancies.length, ' times');
      let numbersRepeated = [];
      let lastNumber = 0;
      for (let i = 0; i < numbersArray.length; i++) {
        for (let j = i + 1; j < numbersArray.length; j++) {
          if (numbersArray[i] === numbersArray[j]) {
            numbersRepeated.push(numbersArray[j]);
          }
        }
      }

      for (let k = 0; k < numbersRepeated.length; k++) {
        for (let l = k + 1; l < numbersRepeated.length; l++) {
          if (numbersRepeated[k] === numbersRepeated[l]) {
            lastNumber = numbersRepeated[l];
          }
        }
      }
      this.lastNumberEmitter.emit(lastNumber);
    }
  };
}
