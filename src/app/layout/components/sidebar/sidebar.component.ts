import { Component, OnInit } from '@angular/core';
import { LogueoService } from '../../services/logueo.service';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    public showMenu: string;
    constructor(private logueoService: LogueoService) {

    }

    ngOnInit() {
        this.showMenu = '';
        // this.logueoService.sendMessage(true);
    }

    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
}
