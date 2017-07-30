import { RouterModule, Routes } from '@angular/router';

import { CanActivateGuard } from './CanActivateGuard';
import { CanDeactivateGuard } from './CanDeactivateGuard';

import { PathComponent } from './path/path.component';
import { NgRouterComponent } from './router.component';
import { QueryComponent } from './query/query.component';
import { VipComponent } from './vip/vip.component';

export const routrRoutes: Routes = [
    {
        path: '',
        redirectTo: 'tabs',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: NgRouterComponent,
        children: [
            { path: '', redirectTo: 'path/1', pathMatch: 'full' },
            { path: 'path/:id', component: PathComponent },
            { path: 'query', component: QueryComponent, },
            // { path: 'query', component: QueryComponent, outlet: "aux" },
            { path: 'vip', component: VipComponent, canActivate: [CanActivateGuard], canDeactivate: [CanDeactivateGuard] },
        ]
    }
]

// export const APP_ROUTER_PROVIDERS = [
//     provideRouter(routes),
//     [CanActivateGuard]
// ];