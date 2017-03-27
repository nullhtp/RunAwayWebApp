import { Component, Input } from '@angular/core';

import { Way } from './way';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'RunAway!';
    @Input() way: Way;
}
