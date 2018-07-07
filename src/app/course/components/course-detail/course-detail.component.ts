import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../../core/services/course.service';

@Component({
    selector: 'course-detail',
    templateUrl: './course-detail.component.html',
    styleUrls: ['./course-detail.component.css'],
    providers: [CourseService],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDetailComponent implements OnInit {

    params: any;
    ngOnInit(): void {
        this.params = this.activatedRoute.snapshot.params;
        this.courseService.getCourse(this.params.id).subscribe(
            data => {
                this.course = data;
                // console.log(data);
            }
        );
        setInterval(() => {
            this.ref.markForCheck();
        }, 1000);
    }
    course: any;

    start: string;

    stringSologan1: string = '“WE CAN SWIM!”';
    stringSologan2: string = '“Dạy bơi kèm riêng cam kết chất lượng!” – Chúng tôi đã, đang và sẽ theo đúng định hướng “đơn giản” này.';

    constructor(private activatedRoute: ActivatedRoute, private courseService: CourseService, private ref: ChangeDetectorRef) {

    }

}
