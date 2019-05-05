import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'main-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit {

    // @Output() valueChange = new EventEmitter();
    // counter: String

    // valueChanged() { // You can give any function name
    //     this.counter = this.counter;
    //     this.valueChange.emit(this.counter);
    // }


    constructor() { }
    ngOnInit() {
    }
}
