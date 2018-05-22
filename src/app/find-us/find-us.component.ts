import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector: 'find-us',
    templateUrl: './find-us.component.html',
    styleUrls: ['./find-us.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FindUsComponent implements OnInit {
    ngOnInit(): void {
        // throw new Error("Method not implemented.");
    }
}
