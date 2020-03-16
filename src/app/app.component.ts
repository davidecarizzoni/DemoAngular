import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoAngular';

  getVal() {
    return 2;
  }

  htmlString = "<div> <p> Prova </p></div>"
  linkURL ="https://www.google.it/"
}
