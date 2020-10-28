import { Component } from '@angular/core';

/**
 * Angular decorator
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TestPaloIt';

  handleNumber = (number) => {
    console.log(number)
  }
}
