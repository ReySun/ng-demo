import { RouterModule, Routes } from '@angular/router';
import { ExampleDef } from './example.model';

import { IntroComponent } from './intro/intro.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: IntroComponent,
        pathMatch: 'full'
    },
    {
        path: 'pipe',
        loadChildren: './pipe/pipe.module#PipeModule'
    },
    {
        path: 'directive',
        loadChildren: './directive/directive.module#DirectiveModule'
    }
    ,
    {
        path: 'router',
        loadChildren: './router/router.module#NgRouterModule'
    }
];

export const examples: ExampleDef[] = [
    { label: 'intro', name: 'root', path: '', },
    { label: 'pipe-normalize', name: 'style', path: 'pipe/normalize' },
    { label: 'attribute-directive', name: 'style', path: 'directive/attr-normalize' },
    { label: 'construct-directive', name: 'style', path: 'directive/cons-normalize' },
    { label: 'template', name: 'style', path: 'directive/template' },
    { label: 'router', name: 'style', path: 'router' },
];
// { path: 'error', loadChildren: 'app/modules/error/error.module#ErrorModule' }, // 错误
//   { path: 'not-found', redirectTo: 'error/404' }, // 404 
//   { path: '**', redirectTo: 'error/404' } // 错误 ， 没有匹配到任何路径的都跳转到404