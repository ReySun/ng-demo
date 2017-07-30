import { Component, OnInit } from '@angular/core';
interface User {
	id: number;
	name: string;
};
@Component({
	selector: 'ng-cons-normalize',
	templateUrl: './cons-normalize.component.html'
})
export class ConsNormalizeComponent implements OnInit {
	fruitsList = ['apple', 'orange', 'pear', 'banana'];
	users = [
		{ id: 1, name: 'Michael' },
		{ id: 2, name: 'Frank' },
		{ id: 3, name: 'Lian' }
	]
	condition: boolean = true;
	myVar: string = 'A';
	constructor() {
	}

	ngOnInit() {
	}

	toggleCondition() {
		this.condition = !this.condition;
	}

	changeMyVar(e) {
		this.myVar = e.target.value;
	}

	trackByUsers(index: number, user) {
		return user.id
	}
}
