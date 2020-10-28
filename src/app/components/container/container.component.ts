import { Component, OnInit } from '@angular/core';

/**
 * Angular Decorator
 */
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  /**
   * Number received
   */
  number: string;

  /**
   * Last number received
   */
  lastNumber: string;

  constructor() { }

  ngOnInit(): void {
  }

  receiveNumber = (number: string) => {
    this.number = number;
  }

  receiveLastNumber = (number: string) => {
    this.lastNumber = number;
  }
}
