import { Injectable } from '@angular/core';
import { Way } from './way';

@Injectable()

export class WayService {

    private ways: Way[] = [
        { id: 1, name: "Круг 1", category: "" },
        { id: 2, name: "Круг 2", category: "" },
        { id: 3, name: "Круг 3", category: "" },
        { id: 4, name: "Круг 4", category: "" },
    ];
    getWays(): Way[] {

        return this.ways;
    }
    addWay(id: number, name: string) {

        this.ways.push(new Way(id,name));
    }
}