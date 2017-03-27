import { Component, OnInit,Input } from '@angular/core';

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

    constructor(private wayService: WayService) { }

    ngOnInit() {
        this.ways = this.wayService.getWays();
    }

    setWay(way: Way) {
        this.selectedWay = way;
    }
}
