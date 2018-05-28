import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';

@Component({
    selector: 'main-trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerComponent implements OnInit {
    @Input() trainer: any;
    @Output() trainerClicked: EventEmitter<any> = new EventEmitter<any>();

    constructor(private router: Router) { }

    ngOnInit() {
    }

    onTrainerClicked($event, trainerId) {
        this.trainerClicked.emit(trainerId);
        console.log('trainer id: ', trainerId);
    }
}
