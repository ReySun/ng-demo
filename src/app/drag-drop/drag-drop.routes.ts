import { DragDropComponent } from './drag-drop-demo.component';
import { RouterModule, Routes } from '@angular/router';


export const dragDropRoutes: Routes = [
    {
        path: '',
        redirectTo: 'drag-drop',
        pathMatch: 'full'
    } ,
    {
        path: 'drag-drop',
        component: DragDropComponent,
        pathMatch: 'full'
    } 
]