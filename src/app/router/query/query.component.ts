import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-query',
	templateUrl: './query.component.html'
})
export class QueryComponent implements OnInit {
	contacts: any[];
	private limit: any;
	private sub: any;
	constructor(private _router: Router, private _ActivatedRoute: ActivatedRoute) { }
	ngOnInit() {
		this.getContacts();
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	getContacts() {
		// console.log(this._ActivatedRoute.queryParams._value);//does not exist on type 'Observable<Params>
		this.sub = this._ActivatedRoute.queryParams.subscribe(value => {
			this.limit = value
		});
	}

}
