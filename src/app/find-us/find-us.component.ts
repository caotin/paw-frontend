import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

// import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

var map;
var maxZoomService;
var infoWindow


@Component({
    selector: 'find-us',
    templateUrl: './find-us.component.html',
    styleUrls: ['./find-us.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindUsComponent implements OnInit {

    lat: number = 16.065676317953837;
    lng: number = 108.22005271911621;

    onChoseLocation(event){
      this.lat = event.coords.lat;
      this.lng = event.coords.lng;
    }

    main_title: any[] = [
        { title: 'Summer`s comming'},
    ];

    descriptions: any[] = [
        { title: 'Heyy!, make your holidays happy with us!!' },
    ];

    constructor() { }
    ngOnInit() {
    }

}
