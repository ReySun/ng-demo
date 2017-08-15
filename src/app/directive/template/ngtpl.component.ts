import { Component, TemplateRef, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
	selector: 'ngtpl',
	template: `
  	<ng-template #tpl>Hello, Semlinker...!</ng-template>
  `,
})
export class NgtplComponent {
	// https://segmentfault.com/a/1190000008672478
	@ViewChild('tpl') tplRef: TemplateRef<any>;
	// TemplateRef：用于表示内嵌的 template 模板元素，通过 TemplateRef 实例，我们可以方便创建内嵌视图(Embedded Views)，且可以轻松地访问到通过 ElementRef 封装后的 nativeElement。需要注意的是组件视图中的 template 模板元素，经过渲染后会被替换成 comment 元素。
	constructor(private vcRef: ViewContainerRef) {
		// ViewContainerRef：用于表示一个视图容器，可添加一个或多个视图。通过 ViewContainer Ref 实例，我们可以基于 TemplateRef 实例创建内嵌视图，并能指定内嵌视图的插入位置，也可以方便对视图容器中已有的视图进行管理。简而言之，ViewContainerRef 的主要作用是创建和管理内嵌视图或组件视图。
	}
	ngAfterViewInit() {
		this.vcRef.createEmbeddedView(this.tplRef);
	}
}