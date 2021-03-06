import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from '../../core/model/course';
import { CourseService } from '../../core/service/course.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent implements OnInit {
    myDate = new Date();
    base64textString: String = '';
    course: Course;
    editorConfig = {
        editable: true,
        spellcheck: false,
        height: '10rem',
        minHeight: '5rem',
        placeholder: 'Nhập Dữ Liệu Vào <3..',
        translate: 'no'
    };

    htmlContent = '';
    // tslint:disable-next-line:variable-name
    time_start: string;
    // tslint:disable-next-line:variable-name
    time_end: string;
    constructor(private courseService: CourseService, private router: Router, public datepipe: DatePipe) { }

    ngOnInit() {
        this.course = this.courseService.getter();
        this.time_start = this.datepipe.transform(this.course.dateStart, 'yyyy-MM-dd');
        this.time_end = this.datepipe.transform(this.course.dateEnd, 'yyyy-MM-dd');
    }
    processForm() {
        this.course.idCategory = 1;
        this.course.image = this.base64textString;
        this.course.price = 0;
        this.course.createAt = this.datepipe.transform(this.myDate, 'yyyy-MM-dd');
        this.course.dateStart = this.time_start;
        this.course.dateEnd = this.time_end;
        if (this.course.idCourse == undefined) {
            this.courseService.createCourse(this.course).subscribe((course) => {
                alert('Thêm Thành Công Lớp ' + this.course.name + '?');
                this.router.navigate(['course-dashboard-detail']);
                this.clear();
            }, (error) => {
                console.log(error);
            });
        } else {
            this.courseService.updateCourse(this.course).subscribe((course) => {
                alert('Sửa Thành Công Lớp ' + this.course.name + '?');
                this.router.navigate(['course-dashboard-detail']);
                this.clear();
            }, (error) => {
                console.log(error);
            });
        }
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
    }
    // clear input
    clear() {
        this.course.idCourse = null;
        this.course.name = '';
        this.course.price = 0;
        this.course.status = '';
        this.course.image = '';
        this.course.description = '';
        this.course.details = '';
        this.course.dateStart = '';
        this.course.dateEnd = '';
        // this.course.createAt='';
    }

}
