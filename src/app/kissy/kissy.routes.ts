import { KissyComponent } from './kissy.component';
import { RouterModule, Routes } from '@angular/router';


export const kissyRoutes: Routes = [
    {
        path: '',
        redirectTo: 'basic',
        pathMatch: 'full'
    } ,
    {
        path: 'basic',
        component: KissyComponent,
        pathMatch: 'full'
    } 
]