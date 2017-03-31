import { Injectable } from '@angular/core';
import { Way, Category, City } from './way';

import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class DadataService {
    private addressUrl = 'http://localhost:52718/api/dadata';
    constructor(private http: Http) { }


    getAddress(query: string): Observable<City[]> {
        return this.http.get(this.addressUrl + "/" + query)
            .map(response => response.json() as City[]);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}