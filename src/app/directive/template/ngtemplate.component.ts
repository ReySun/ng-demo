import { Component, OnInit } from '@angular/core';
interface User {
	id: number;
	name: string;
};
@Component({
	selector: 'ng4-template',
	templateUrl: './ngtemplate.component.html'
})
export class NgTemplateComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
	}
}
