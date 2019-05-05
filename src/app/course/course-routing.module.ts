import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CourseComponent } from './course.component';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CourseComponent,
            },
            {
                path: ':id',
                component: CourseDetailComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    declarations: [],
    exports: [
        RouterModule
    ]
})
export class CourseRoutingModule { }
