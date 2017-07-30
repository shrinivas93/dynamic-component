import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Demo';
  components = ["Comp1Component", "Comp2Component"];
  selectedComponent;
  constructor() {
    var i = 0;
    setInterval(() => {
        this.selectedComponent = this.components[i++ % 2];
    }, 2000);
  }
}