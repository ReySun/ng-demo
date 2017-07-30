import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-normalize',
	templateUrl: './normalize.component.html'
})
export class NormalizeComponent implements OnInit {
	pi: number = 3.141592652412432356;
	a: number = 100;
	b: number = 100;
	myNum: number = 0.1415927;
	object: Object = {
		foo: 'bar',
		baz: 'qux',
		nested: {
			xyz: 3,
			numbers: [1, 2, 3, 4, 5]
		}
	};
	today = new Date();
	constructor() { }

	ngOnInit() {
	}

}
