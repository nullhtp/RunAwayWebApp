import { Component, Input } from '@angular/core';

import { Way, City } from './way';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'RunAway!';
    @Input() way: Way;
    @Input() city: City = new City;
}
