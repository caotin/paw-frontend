import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

export const ROUTES = [
    { path: '/trainer/Mane', name: 'Mane', position: 'CEO, Teacher', img: 'assets/img/trainner/trainner1.jpg', class: '' },
    { path: '/trainer/Salah', name: 'Salah', position: 'Founder',  img:'assets/img/trainner/trainner2.jpg', class: '' },
    { path: '/trainer/Firmino', name: 'Firmino', position: 'Teacher',  img:'assets/img/trainner/trainner3.jpg', class: '' },
    { path: '/trainer/Hendo', name: 'Hendo', position: 'Teacher',  img:'l../../', class: '' },
    { path: '/trainer/Chamberlain', name: 'Chamberlain', position: 'MASTER Teacher', img:'/../../', class: '' },

];

@Component({
    selector: 'trainer',
    templateUrl: './trainer.component.html',
    styleUrls: ['./trainer.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainerComponent implements OnInit {
    traineritems: any[];
    constructor(private router: Router) { }

    main_title: any[] = [
        { title: 'OUR STAFF'},
    ];

    descriptions: any[] = [
        { title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry' +
        'Lorem Ipsum has been the industrys ' +
        'standard dummy text ever since the 1500s, ' +
        'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
        'It has survived not only five centuries, but also the leap into electronic typesetting, ',
        }
    ];

    ngOnInit() {
        this.traineritems = ROUTES.filter(traineritems => traineritems);
        console.log(this.traineritems);
    }

}
