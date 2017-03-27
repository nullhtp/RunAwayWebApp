import { Component, Input } from '@angular/core';

import { Way } from './way';

@Component({
    selector: 'yandex-map',
    templateUrl: './yandex-map.component.html',
})
export class YandexMapComponent {
    title = 'Map!';
    //@Input() selectedMapWay:Way;
}
