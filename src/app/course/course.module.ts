import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CourseComponent } from './course.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { MainHeaderComponent } from '../shared/main-header/main-header.component';
import { MainFooterComponent } from '../shared/main-footer/main-footer.component';
import { SharedModule } from '../shared/shared.module';

export const SHARED_MODULE: any[] = [
    CommonModule,
    RouterModule,
    SharedModule
];

export const SHARED_COMPONENTS: any[] = [
    CourseDetailComponent
];

@NgModule({
    imports: [...SHARED_MODULE],
    declarations: [...SHARED_COMPONENTS]
})
export class CourseModule { }
