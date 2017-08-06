import { RouterModule, Routes } from '@angular/router';

import { AttrNormalizeComponent } from './attribute-directive/attr-normalize/attr-normalize.component';
import { ConsNormalizeComponent } from './construct-directive/cons-normalize/cons-normalize.component';
import { NgTemplateComponent } from './template/ngtemplate.component';
import { AdDemoComponent } from './dynamic/ad-demo.component';

export const DirectivRoutes: Routes = [
    {
        path: '',
        redirectTo: 'attr-normalize',
        pathMatch: 'full'
    },
    {
        path: 'attr-normalize',
        component: AttrNormalizeComponent,
        pathMatch: 'full'
    },
    {
        path: 'cons-normalize',
        component: ConsNormalizeComponent,
        pathMatch: 'full'
    },
    {
        path: 'template',
        component: NgTemplateComponent,
        pathMatch: 'full'
    },
    {
        path: 'dynamic',
        component: AdDemoComponent,
        pathMatch: 'full'
    }
]