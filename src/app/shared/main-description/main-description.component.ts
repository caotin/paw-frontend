import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'main-description',
    // templateUrl: './main-description.component.html',
    styleUrls: ['./main-description.component.css'],
    template: `

    <div class="homeExp__excerpt homeSection__excerpt col-md-6 center-block no-padding" *ngFor="let item of descriptions">
    <p>{{ item.title }}</p>
    </div>

`
})
export class MainDescriptionComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    @Input()
    descriptions: any[] = [];

}
