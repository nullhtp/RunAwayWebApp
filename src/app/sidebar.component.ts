import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';

import { WayService } from './way.service';
import { Way, Category, City } from './way';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    title = 'Sidebar!';
    ways: Way[];
    categories: Category[] = [{
        id: 0,
        name: "все"
    },
    {
        id: 1,
        name: "бег"
    },
    {
        id: 2,
        name: "прогулка"
    },
    {
        id: 3,
        name: "велосипед"
    }];
    @Input() selectedWay: Way;
    @Output() selectedWayChange = new EventEmitter<Way>();

    selectedCity: City = { id: "1111", name:"Kenigsberg" };
    selectedCategory: Category = { id: 0, name: "Все" };

    constructor(private wayService: WayService) { }

    ngOnInit() {
        //this.wayService.getWays().then(response => this.ways = response).then(way => console.log(this.ways));

        this.wayService.getWays().subscribe(response => this.ways = response);
    }

    setCategory(category: Category) {
        this.selectedCategory = category;
        if (category.id == 0) {
            this.wayService.getWays().subscribe(response => this.ways = response);
            //this.wayService.getWays().then(response => this.ways = response).then(way => console.log(this.ways));
        }
        else {
            this.wayService.getWaysByCategory(this.selectedCity, category).subscribe(response => this.ways = response);
            //this.wayService.getWaysByCategory(category.id).then(ways => this.ways = ways).then(way=>console.log(this.ways));
        }
        console.log(this.ways);
    }

    setWay(way: Way) {
        this.wayService.getWay(way.id)
            .then(way => this.selectedWay = way)
            .then(way => this.selectedWayChange.emit(this.selectedWay));
    }

    setCity() {
        this.wayService.getWaysByCategory(this.selectedCity, this.selectedCategory).subscribe(response => this.ways = response);

    }
}
