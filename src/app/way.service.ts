import { Injectable } from '@angular/core';
import { Way } from './way';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class WayService {
    private waysUrl = 'api/ways';
    constructor(private http: Http) { }


    getWays() {

        return this.http.get(this.waysUrl)
            .toPromise()
            .then(response => response.json().data as Way[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    addWay(id: number, name: string) {

       // this.ways.push(new Way(id,name));
    }
}