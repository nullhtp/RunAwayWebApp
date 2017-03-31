import { Component, Input } from '@angular/core';

import { Way } from './way';

declare var ymaps: any;


@Component({
    selector: 'yandex-map',
    templateUrl: './yandex-map.component.html',
})

export class YandexMapComponent {
    title = 'Map!';
    myMap;
    @Input() selectedWay: Way;
    private _geolocationPoint = [];
    constructor() {
        //navigator.geolocation.getCurrentPosition(this.getGeolocation);
        //console.log(this._geolocationPoint);
        ymaps.ready().then(() => {
            this.myMap = new ymaps.Map('map', {
                center: [56.399625, 36.71120],
                zoom: 7,
            });
        });
    }
    getGeolocation(position) {
        this._geolocationPoint = [position.coords.latitude,
        position.coords.longitude];
    }

    selectingWay(rout: Way) {
        var points = [];
        rout.points.forEach(point => points.push([point.latitude, point.longitude]));
        console.log(points);
        console.log(rout);

        var multiRoute = new ymaps.multiRouter.MultiRoute({
            referencePoints: rout.points = points
        }, {
                editorMidPointsType: "via",
                editorDrawOver: false
            });
        this.myMap.geoObjects.removeAll();
        this.myMap.geoObjects.add(multiRoute);
        this.myMap.setCenter(points[0], 10);
    }
}
