import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';

import { WayService } from './way.service';
import { DadataService } from './dadata.service';
import { Way, Category, City } from './way';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
    title = 'Sidebar!';
    ways: Way[] = [];
    categories: Category[] = [{
        id: 0,
        name: "All",
        icon: "fa-blind"
    },
    {
        id: 1,
        name: "Run",
        icon: "fa-blind"
    },
    {
        id: 2,
        name: "Walk",
        icon: "fa-blind"
    },
    {
        id: 3,
        name: "Cycle",
        icon: "fa-bicycle"
    }];
    @Input() selectedWay: Way;
    @Input() selectedCity: City = new City;
    @Output() selectedWayChange = new EventEmitter<Way>();

    selectedCategory: Category = { id: 0, name: "Все", icon: "fa-blind" };

    constructor(private wayService: WayService, private dadataService: DadataService) { }

    ngOnInit() {
    }

    setCategory(category: Category) {
        this.selectedCategory = category;
        if (category.id == 0) {
            this.wayService.getWays().subscribe(response => this.ways = response);
        }
        else {
            this.wayService.getWaysByCategory(this.selectedCity, category).subscribe(response => this.ways = response);
        }
        console.log(this.selectedCity);
    }

    setWay(way: Way) {
        this.wayService.getWay(way.id)
            .then(way => this.selectedWay = way)
            .then(way => this.selectedWayChange.emit(this.selectedWay));
    }

    setCity(city:City) {
        //let cities = [];
        //this.dadataService.getAddress(this.selectedCity.name).subscribe(response => this.cities = response);
        this.selectedCity = city;
        console.log(this.selectedCity);
        this.wayService.getWaysByCategory(this.selectedCity, this.selectedCategory).subscribe(response => this.ways = response);
    }
}
