import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Event } from '../core/model/event';
import { Router } from '@angular/router';
import { EventService } from '../core/service/event.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'event-dashboard',
    templateUrl: './event-dashboard.component.html',
    styleUrls: ['./event-dashboard.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventDashboardComponent implements OnInit {
    event: Event;
    base64textString: String = '';
    editorConfig = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        minHeight: '5rem',
        placeholder: 'Nhập Dữ Liệu Vào <3..',
        translate: 'no'
    };
    time: string;
    constructor(
        private router: Router,
        private eventService: EventService,
        public datepipe: DatePipe) { }

    ngOnInit() {
        this.event = this.eventService.getter();
        this.time = this.datepipe.transform(this.event.createAt, 'yyyy-MM-dd');
    }
    handleFileSelect(evt) {
        // tslint:disable-next-line:prefer-const
        let files = evt.target.files;
        const file = files[0];

        if (files && file) {
            const reader = new FileReader();

            reader.onload = this._handleReaderLoaded.bind(this);

            reader.readAsBinaryString(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        const binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        // console.log(this.base64textString);
    }
    // create data
    processForm() {
        this.event.idCategory = 1;
        this.event.image = this.base64textString;
        this.event.createAt = this.time;
        if (this.event.idEvent == undefined) {
            this.eventService.createEvent(this.event).subscribe((data) => {
                alert('Thêm Thành Công !');
                this.router.navigate(['home-dashboard']);
                this.clear();
            }, (error) => {
                console.log(error);
            });
        } else {
            this.eventService.updateEvent(this.event).subscribe((data) => {
                alert('Sửa Thành Công !');
                this.router.navigate(['home-dashboard']);
                this.clear();
            }, (error) => {
                console.log(error);
            });
        }
    }

    // clear input
    clear() {
        this.event.idEvent = null;
        this.event.title = '';
        this.event.description = '';
        this.event.details = '';
        this.event.image = '';
        this.event.createAt = '';
    }

}
