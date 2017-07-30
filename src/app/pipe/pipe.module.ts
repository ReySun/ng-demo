import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap';

import { RouterModule } from '@angular/router';
import { pipeRoutes } from './pipe.routes';

import { NormalizeComponent } from './normalize/normalize.component';
import { WelcomePipe } from './diy-pipe/welcome.pipe';
import { RepeatPipe } from './diy-pipe/repeat.pipe';
import { TrimSpacePipe } from './diy-pipe/trim-space.pipe';
@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(pipeRoutes),
		AlertModule.forRoot()
	],
	declarations: [
		NormalizeComponent,
		WelcomePipe,
		RepeatPipe,
		TrimSpacePipe
	]
})
export class PipeModule { }
