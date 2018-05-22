import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit {

    
    ngOnInit(): void {
    }
  course: any[] = [

        { levels: 'classic', title: 'CLASSIC COURSE', content: '/***/',  class: "/courses-detail/classic" },
        { levels: 'advanced', title: 'ADVANCED COURSE', content: '/***/',  class: "/courses-detail/advance" },
        { levels: 'normal', title: 'NORMAL COURSE', content: '/***/', class: "/courses-detail/normal" },
        { levels: 'cro', title: 'CRO COURSE', content: '/***/', class: "/courses-detail/cro" },

    ];
  start: string;
  
  stringSologan1: string;
  stringSologan2: string;
  coursess: any[];

  constructor() { }

  public curPath: string;


  path: string;
  private sub: any;

}
