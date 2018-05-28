import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

declare var $:any;
import { ROUTESC } from './data/course-child-data';
import { ROUTESP } from './data/course-parent-data';
import { ROUTESF } from './data/focus-on-data';
import { ROUTES } from './data/trainer-data';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent implements OnInit {
    parent_course_items: any[];
    child_course_items: any[];
    focus_items: any[];
    traineritems: any;

    main_title: any[] = [
        { title: 'Try out the hanah sport center' },
    ];

    descriptions: any[] = [
        { title: 'with out 3-days all access pass with no commitment.' },
    ];

    constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
       this.parent_course_items = ROUTESP.filter(parent_course => parent_course);
       this.child_course_items = ROUTESC.filter(child_course => child_course);
       this.focus_items = ROUTESF.filter(focus => focus);
       this.traineritems = ROUTES.filter(traineritems => traineritems);
    }

    onTrainerClicked(trainerId: number) {
      console.log('Clicked on button view profile!');
      this.router.navigate(['../trainer/', trainerId]);
    }

    mainTrainerClicked(){
        this.router.navigate(['/trainer']);
    }

}
