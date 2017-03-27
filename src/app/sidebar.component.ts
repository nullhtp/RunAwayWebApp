import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { WayService } from './way.service';
import { Way } from './way';


@Component({
    selector: 'sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    title = 'Sidebar!';
    ways: Way[];
    @Input() selectedWay: Way;
    @Output() selectedWayChange = new EventEmitter<Way>();

    constructor(private wayService: WayService) { }

    ngOnInit() {
        this.wayService.getWays().then(ways => this.ways = ways);
    }

    setWay(way: Way) {
        this.selectedWay = way;
        this.selectedWayChange.emit(way);
    }
}
