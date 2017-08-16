import { ViewContainerRefComponent } from './template/ViewContainerRef.component';
import { AdService } from './dynamic/ad.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { DirectivRoutes } from "./directive.routes";

import { AlertModule } from 'ngx-bootstrap';

import { AttrNormalizeComponent } from './attribute-directive/attr-normalize/attr-normalize.component';
import { HighlightDirective } from './attribute-directive/diy-attr-directive/highlight.directive';

import { UnIfDirective } from './construct-directive/diy-cons-directive/unIf.directive';
import { ConsNormalizeComponent } from './construct-directive/cons-normalize/cons-normalize.component';

import { NgtploutletComponent } from './template/ngtploutlet.component';
import { NgtplcontextComponent } from './template/ngtplcontext.component';
import { NgtplComponent } from './template/ngtpl.component';
import { NgComptOutletComponent, AlertSuccessComponent, AlertDangerComponent } from './template/ngComptOutlet.component';
import { NgTemplateComponent } from './template/ngtemplate.component';

import { HeroJobAdComponent } from "./dynamic/hero-job-ad.component";
import { HeroProfileComponent } from './dynamic/hero-profile.component';
import { AdDemoComponent } from './dynamic/ad-demo.component';
import { AdBannerComponent } from './dynamic/ad-banner.component';
import { AdDirective } from './dynamic/ad.directive';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(DirectivRoutes),
		AlertModule,
	],
	declarations: [
		AttrNormalizeComponent,
		HighlightDirective,
		ConsNormalizeComponent,
		UnIfDirective,
		NgtplComponent,
		NgtplcontextComponent,
		NgtploutletComponent,
		NgComptOutletComponent,
		AlertSuccessComponent,
		AlertDangerComponent,
		NgTemplateComponent,
		HeroProfileComponent,
		HeroJobAdComponent,
		AdDemoComponent,
		AdBannerComponent,
		AdDirective,
		ViewContainerRefComponent
	],
	entryComponents: [
		AlertSuccessComponent,
		AlertDangerComponent,
		HeroJobAdComponent, 
		HeroProfileComponent
	],
	providers:[
		AdService
	]
})
export class DirectiveModule { }
