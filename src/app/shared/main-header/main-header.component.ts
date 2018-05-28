import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTES } from './header-data'

declare var $:any;

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {

    category_items: any[] = ROUTES;

    constructor() { }

    ngOnInit() {
       this.category_items = ROUTES.filter(categories => categories);
        $.getScript('../../../assets/js/function-main.min.js');
    }

}
