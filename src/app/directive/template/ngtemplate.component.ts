import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
interface User {
	id: number;
	name: string;
};
@Component({
	selector: 'ng4-template',
	templateUrl: './ngtemplate.component.html'
})
export class NgTemplateComponent implements OnInit {
	@ViewChild('viewcontainer', {read: ViewContainerRef}) _viewContainerRef: ViewContainerRef;   
	@ViewChild('tpl2') template: TemplateRef<any>;
	constructor() {
	}

	ngOnInit() {
		this._viewContainerRef.createEmbeddedView(this.template);
	}
}
