import { Component, OnInit, Input } from '@angular/core';

import { LuckyInterface } from '../../interfaces/lucky.interface';
import { luckyFixture } from '../../fixtures/lucky.fixture';

/**
 * Angular decorator
 */
@Component({
  selector: 'app-luckynumber',
  templateUrl: './luckynumber.component.html',
  styleUrls: ['./luckynumber.component.scss']
})
export class LuckynumberComponent implements OnInit {

  /**
   * Last number received
   */
  @Input() lastNumber: string;

  /**
   * Lucky number legend
   */
  luckyLegend: LuckyInterface;

  constructor() { }

  ngOnInit(): void {
    this.luckyLegend = luckyFixture;
  }
}
