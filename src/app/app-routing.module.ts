import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FindUsComponent } from './find-us/find-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';

import { ROUTES as CourseRoutingModule } from './course/course-routing.module';
import { ROUTES as TrainerRoutingModule } from './trainer/trainer-routing.module';
import { HomeDashboardComponent } from './dashboard/home-dashboard/home-dashboard.component';
import { CourseDetailComponent } from './dashboard/course/course-detail/course-detail.component';
import { CourseComponent } from './dashboard/course/course/course.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './login/login.guard';
import { NoLoginGuard } from './login/no-login.guard';
import { RegisterComponent } from './register/register.component';
import { TrainerComponent } from './dashboard/trainer/trainer/trainer.component';
import { TrainerDetailComponent } from './dashboard/trainer/trainer-detail/trainer-detail.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { EventDashboardComponent } from './dashboard/event-dashboard/event-dashboard.component';
import { NewsDashboardComponent } from './dashboard/news-dashboard/news-dashboard.component';
import { FeedbackComponent } from './dashboard/feedback/feedback.component';
export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login', canActivate: [NoLoginGuard],
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
    },
    {
        path: 'find-us',
        component: FindUsComponent
    },
    {
        path: 'course',
        children: [
            ...CourseRoutingModule
        ]
    },
    {
        path: 'trainer',
        children: [
            ...TrainerRoutingModule
        ]
    },
    {
        path: 'events',
        component: EventComponent
    },
    {
        path: 'news',
        component: NewsComponent
    },
    {
        path: 'home-dashboard', canActivate: [LoginGuard],
        component: HomeDashboardComponent
    },
    {
        path: 'course-dashboard-detail', canActivate: [LoginGuard],
        component: CourseDetailComponent
    },
    {
        path: 'course-dashboard', canActivate: [LoginGuard],
        component: CourseComponent
    },
    {
        path: 'trainer-dashboard', canActivate: [LoginGuard],
        component: TrainerComponent
    },
    {
        path: 'trainer-dashboard-detail', canActivate: [LoginGuard],
        component: TrainerDetailComponent
    },
    {
        path: 'setting-dashboard', canActivate: [LoginGuard],
        component: SettingComponent
    },
    {
        path: 'event-dashboard', canActivate: [LoginGuard],
        component: EventDashboardComponent
    },
    {
        path: 'news-dashboard', canActivate: [LoginGuard],
        component: NewsDashboardComponent
    },
    {
        path: 'feedback-dashboard', canActivate: [LoginGuard],
        component: FeedbackComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
