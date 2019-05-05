import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { TrainerDetailComponent } from './components/trainer-detail/trainer-detail.component';
import { TrainerComponent } from './trainer.component';

export const ROUTES: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: TrainerComponent,
            },
            {
                path: ':id',
                component: TrainerDetailComponent
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
export class TrainerRoutingModule { }
