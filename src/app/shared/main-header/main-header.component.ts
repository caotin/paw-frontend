import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTES } from './assets'
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

declare var $: any;

@Component({
    selector: 'main-header',
    templateUrl: './main-header.component.html',
    styleUrls: ['./main-header.component.css'],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainHeaderComponent implements OnInit {

    cate: any[] = ROUTES;

    constructor() { }

    ngOnInit() {
        this.cate = ROUTES.filter(cate => cate);
        $.getScript('../../../assets/js/function-main.min.js');
    }

}
