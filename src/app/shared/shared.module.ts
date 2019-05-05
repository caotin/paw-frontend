import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SliderComponent } from './slider/slider.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainTitleComponent } from './main-title/main-title.component';
import { MainDescriptionComponent } from './main-description/main-description.component';
import { ButtonComponent } from './button/button.component';
import { TrainerComponent } from './trainer/trainer.component';

import { SliderModule } from 'ngx-slider';

export const SHARED_MODULE: any[] = [
    CommonModule,
    RouterModule,
    SliderModule
];

export const SHARED_COMPONENTS: any[] = [
    SliderComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainTitleComponent,
    MainDescriptionComponent,
    ButtonComponent,
    TrainerComponent
];

@NgModule({
    imports: [...SHARED_MODULE],
    exports: [...SHARED_COMPONENTS],
    declarations: [...SHARED_COMPONENTS]
})
export class SharedModule { }
