import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'main-title',
    // templateUrl: './main-title.component.html',
    styleUrls: ['./main-title.component.css'],
    template: `

    <h3 class="homeMktg__title homeSection__sub" *ngFor="let item of main_title">
    {{ item.title }}
    </h3>

    `

})
export class MainTitleComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input()
    main_title: any[] = [];
}
