import { RouterModule, Routes } from '@angular/router';

import { NormalizeComponent } from './normalize/normalize.component'

export const pipeRoutes: Routes = [
    {
        path: '',
        redirectTo: 'normalize',
        pathMatch: 'full'
    },
    {
        path: 'normalize',
        component: NormalizeComponent,
        pathMatch: 'full'
    }
]