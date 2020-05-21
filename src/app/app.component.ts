import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalStart(startNumber: number) {
    if(startNumber % 2 === 0) {
      this.evenNumbers.push(startNumber);
    } else {
      this.oddNumbers.push(startNumber);
    }
  }
}
