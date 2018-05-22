import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindUsComponent } from './find-us/find-us.component';
const routes: Routes =[
    { path: 'home',      component: HomeComponent },
    { path: 'course',      component: CourseComponent },
    { path: 'courses-detail/:id',      component: CourseDetailComponent },
    { path: 'contact',      component: ContactUsComponent },
    { path: 'maps',      component: FindUsComponent },
    { path: '',          redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
