import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppConfigService } from './core/services/app-config.service';
import { AuthService } from './core/services/auth.service';
import { ExceptionService } from './core/services/exception.service';
import { InterceptorService } from './core/services/interceptor.service';
import { LocalStorageService } from './core/services/local-storage.service';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TrainerComponent } from './trainer/trainer.component';
import { FindUsComponent } from './find-us/find-us.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { TrainerDetailComponent } from './trainer-detail/trainer-detail.component';

import { Routes, RouterModule } from '@angular/router';
import { TypingAnimationDirective } from 'angular-typing-animation'
// import { SliderModule } from 'ngx-slider';
// import { SlideshowModule} from 'ng-simple-slideshow';

// import {Location} from '@angular/common';


// const routes: Routes =[
//       { path: 'home',      component: HomeComponent },
//       { path: 'course',      component: CourseComponent },
//       { path: '',          redirectTo: 'home', pathMatch: 'full' },
// ];

export const APP_MODULES: any[] = [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule,
    FormsModule, 
    ReactiveFormsModule
    // FormsModule
    // SliderModule,
    // SlideshowModule,
    // RouterModule.forRoot(routes)
];

export const APP_SERVICES: any[] = [
    AppConfigService,
    LocalStorageService,
    ExceptionService,
    AuthService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: InterceptorService,
        multi: true
    }
];

export const APP_COMPONENTS: any[] = [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    TrainerComponent,
    TrainerDetailComponent,
    FindUsComponent,
    CourseComponent,
    CourseDetailComponent,
    TypingAnimationDirective
];

@NgModule({
    declarations: [...APP_COMPONENTS],
    imports: [...APP_MODULES],
    providers: [...APP_SERVICES],
    bootstrap: [AppComponent]
})
export class AppModule { }
