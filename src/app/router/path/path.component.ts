import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-path',
	templateUrl: './path.component.html'
})

export class PathComponent implements OnInit {
	contact_id: number;
	private sub: any;
	constructor(private _activatedRoute: ActivatedRoute) { }
	// 当在地址栏输入http://localhost:4200/#/router/path/3时，并没有.这是因为Angular在处理同一页面内跳转时，不会重新创建组件的实例，所以组件的构造函数和ngOnInit()方法都没有被调用到
	// 注意focus焦点是选中id 还是全部的url是不同的
	// ngOnInit() {
	// 	this.contact_id = parseInt(this._activatedRoute.snapshot.params['id']);
	// 	console.log("参数id的值为" + this.contact_id);
	// }

	// 改进之后
	ngOnInit() {
		this.sub = this._activatedRoute.params.subscribe(params => {
			this.contact_id = parseInt(params['id']);
			console.log("参数id的值为" + this.contact_id);
			// this.getById(this.contact_id);
		});
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
		console.log("router-path组件销毁");
	}
}
