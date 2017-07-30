import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routrRoutes } from './router.routes';
import { CanActivateGuard } from './CanActivateGuard';
import { CanDeactivateGuard } from './CanDeactivateGuard';

import { TabsModule } from 'ngx-bootstrap';

import { NgRouterComponent } from './router.component';
import { PathComponent } from './path/path.component';
import { QueryComponent } from './query/query.component';
import { VipComponent } from './vip/vip.component';


@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routrRoutes),
		TabsModule.forRoot()
	],
	declarations: [
		PathComponent,
		QueryComponent,
		NgRouterComponent,
		VipComponent,
	],
	providers:[
		CanActivateGuard,
		CanDeactivateGuard
	]
})
export class NgRouterModule { }
