import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import {Event} from '../../core/model/event';
@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
    @Input() event: Event[];
    title = '';
    constructor() { }

    ngOnInit() {
    }

}
