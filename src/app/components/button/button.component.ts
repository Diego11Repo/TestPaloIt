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
