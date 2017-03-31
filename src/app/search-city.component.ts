import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Form } from '@angular/forms';

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
    selector: 'search-city',
    templateUrl: './search-city.component.html',
    styleUrls:  ['./search-city.component.css'],
})
export class SearchCityComponent implements OnInit {
    @Input() selectedCity: City = new City;
    @Output() selectedCityChange = new EventEmitter<City>();
    serchedCities: Observable<City[]>;
    private searchTerms = new Subject<string>();

    constructor(private dadataService: DadataService) { }

    ngOnInit() {
        this.serchedCities = this.searchTerms
            .debounceTime(300)        
            .distinctUntilChanged()   
            .switchMap(term => term   
                ? this.dadataService.getAddress(term)
                : Observable.of<City[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<City[]>([]);
            });
    }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    setCity(city: City) {
        this.selectedCity = city;
        this.selectedCityChange.emit(city);
        console.log(this.selectedCity);
    }
}
