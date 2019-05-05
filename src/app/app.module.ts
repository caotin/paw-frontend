import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TrainerModule } from './trainer/trainer.module';
import { CourseModule } from './course/course.module';
// import { AgmCoreModule } from '@agm/core';
import { SliderModule } from 'ngx-slider';

import { AppConfigService } from './core/services/app-config.service';
import { AuthService } from './core/services/auth.service';
import { ExceptionService } from './core/services/exception.service';
import { InterceptorService } from './core/services/interceptor.service';
import { LocalStorageService } from './core/services/local-storage.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindUsComponent } from './find-us/find-us.component';
import { CourseComponent } from './course/course.component';
import { TrainerComponent } from './trainer/trainer.component';
import { EventComponent } from './event/event.component';
import { NewsComponent } from './news/news.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginComponent } from './login/login.component';
import { CourseService } from './dashboard/core/service/course.service';
import { DatePipe } from '@angular/common';
import { LoginGuard } from './login/login.guard';
import { NoLoginGuard } from './login/no-login.guard';
import { TrainerService } from './dashboard/core/service/trainer.service';
import { SlideService } from './dashboard/core/service/slide.service';
import { EventService } from './dashboard/core/service/event.service';
import { NewsService } from './dashboard/core/service/news.service';

import { FeedbackService } from './dashboard/core/service/feedback.service';
import { RegisterComponent } from './register/register.component';
export const APP_MODULES: any[] = [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule,
    SliderModule,
    ReactiveFormsModule,
    HttpModule,
    // AgmCoreModule,
    OwlModule,
    TrainerModule,
    CourseModule,
    DashboardModule,
    HttpClientModule
];

export const APP_SERVICES: any[] = [
    AppConfigService,
    LocalStorageService,
    ExceptionService,
    AuthService,
    CourseService,
    SlideService,
    EventService,
    NewsService,
    FeedbackService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    },

];

export const APP_COMPONENTS: any[] = [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    FindUsComponent,
    CourseComponent,
    TrainerComponent,
    EventComponent,
    NewsComponent
];

@NgModule({
    declarations: [...APP_COMPONENTS, LoginComponent, RegisterComponent],
    imports: [...APP_MODULES],
    providers: [...APP_SERVICES, DatePipe, LoginGuard, NoLoginGuard, TrainerService],
    bootstrap: [AppComponent]
})
export class AppModule { }
