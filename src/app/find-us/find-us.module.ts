import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { FindUsComponent } from './find-us.component';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCsVn6hvjKUlSPVUiYECSmPsauaVofQAK4'
        })
    ],
    declarations: [
        FindUsComponent
    ]
})
export class FindUsModule { }
