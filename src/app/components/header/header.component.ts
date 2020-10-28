import { Component, OnInit } from '@angular/core';

import { HeaderInterface } from '../../interfaces/header.interface';
import { headerFixture } from '../../fixtures/header.fixture';

/**
 * Angular decorator
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  /**
   * Label for header
   */
  label: HeaderInterface;

  constructor() { }

  ngOnInit(): void {
    this.label = headerFixture;
  }

}
