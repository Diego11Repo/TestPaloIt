import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { UserInputInterface } from "../../interfaces/userinput.interface";
import { userInputFixture } from "../../fixtures/userinput.fixture";

/**
 * Angular decorator
 */
@Component({
  selector: "app-userinput",
  templateUrl: "./userinput.component.html",
  styleUrls: ["./userinput.component.scss"],
})
export class UserinputComponent implements OnInit {
  /**
   * Output for input number
   */
  @Output() emitNumber = new EventEmitter();

  /**
   * label for input
   */
  input: UserInputInterface;

  /**
   * Length for alerts
   */
  alert: boolean;

  constructor() {}

  ngOnInit(): void {
    this.input = userInputFixture;
  }

  onBlur = (event: any) => {
    const inputValue = event.target.value;
    inputValue.length < 16
    ? this.alert = true
    : this.alert = false
    this.emitNumber.emit(inputValue);
  };
}
