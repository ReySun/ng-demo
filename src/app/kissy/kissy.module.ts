import { RouterModule } from '@angular/router';
import { kissyRoutes } from './kissy.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KissyComponent } from './kissy.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(kissyRoutes)
	],
	declarations: [KissyComponent]
})
export class KissyModule { }
