import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TrainerComponent } from './trainer.component';

export const SHARED_MODULE: any[] = [
    CommonModule,
    RouterModule
];

export const SHARED_COMPONENTS: any[] = [
    TrainerDetailComponent
];

@NgModule({
    imports: [...SHARED_MODULE],
    declarations: [...SHARED_COMPONENTS]
})
export class TrainerModule { }
