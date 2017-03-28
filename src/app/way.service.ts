import { Injectable } from '@angular/core';
import { Way, Category, City } from './way';

import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class WayService {
    private waysUrl = 'http://localhost:52718/api/ways';
    constructor(private http: Http) { }


    getWays() {
        return this.http.get(this.waysUrl)
            .map(response => response.json())

        //return this.http.get(this.waysUrl)
        //    .toPromise()
        //    .then(response => response.json().data as Way[])
        //    .catch(this.handleError);
    }

    getWaysByCategory(city: City, category: Category) {

        return this.http.get(this.waysUrl + "/" + city.id + "/" + category.id)
            .map(response => response.json() as Way[]);
            //.toPromise()
            //.then(response => response.json().data as Way[])
            //.catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getWay(id: number){

        return this.http.get(this.waysUrl+"/"+id)
            //.map(response => response.json().data as Way);
            .toPromise()
            .then(response => response.json() as Way)
            .catch(this.handleError);
    }



    addWay(id: number, name: string) {

        // this.ways.push(new Way(id,name));
    }
}