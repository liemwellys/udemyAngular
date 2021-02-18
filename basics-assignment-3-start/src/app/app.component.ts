import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  paragraph = 'Secret Password = tuna';
  count = 0;
  container = [];
  displayParagraph = false;

  onDisplay() {
    this.displayParagraph = !this.displayParagraph;
    this.count++;
    // this.container.push(this.count);
    this.container.push(new Date());
  }

  getColor(item) {
    if (item >= 4) {
      return '#4287f5';
    } else {
      return 'transparent';      
    }
  }
}
