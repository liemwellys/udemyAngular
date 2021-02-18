import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraph = 'Secret Password = tuna';
  count = 0;
  container1 = [];
  container2 = []
  displayParagraph = false;

  constructor () { }

  onDisplay() {
    this.displayParagraph = true;
    this.count++;
    if (this.count < 5) {
      this.container1.push(this.count);
    } else {
      this.container2.push(this.count);
    }
  }

  getColor() {
    if (this.count > 4) {
      return '#4287f5';
    }
  }
}
