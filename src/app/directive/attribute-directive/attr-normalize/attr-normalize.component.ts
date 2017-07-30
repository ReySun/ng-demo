import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-attr-normalize',
	templateUrl: './attr-normalize.component.html'
})
export class AttrNormalizeComponent implements OnInit {
	fontSize: string = "5";
	textHoverColor : string;

	constructor() { }

	ngOnInit() {
	}

}
