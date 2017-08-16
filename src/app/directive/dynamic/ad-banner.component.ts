import { Component, Input, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy, OnInit } from '@angular/core';

import { AdDirective } from './ad.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad.component';

@Component({
	selector: 'add-banner',
	template: `
              <div class="ad-banner">
                <h3>Advertisements</h3>
                <ng-template ad-host></ng-template>
			  </div>
            `
})
export class AdBannerComponent implements AfterViewInit, OnDestroy, OnInit {
	
	@Input() ads: AdItem[];
	currentAddIndex: number = -1;
	@ViewChild(AdDirective) adHost: AdDirective;
	subscription: any;
	interval: any;

	constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

	ngOnInit(): void {
		this.loadComponent();
		this.getAds();
	}
	ngAfterViewInit() {
		// 官网例子在此会报错。改为ngOnInit
		// this.loadComponent();
		// this.getAds();
	}

	ngOnDestroy() {
		clearInterval(this.interval);
	}

	loadComponent() {
		this.currentAddIndex = (this.currentAddIndex + 1) % this.ads.length;
		let adItem = this.ads[this.currentAddIndex];

		let componentFactory = this._componentFactoryResolver.resolveComponentFactory(adItem.component);

		let viewContainerRef = this.adHost.viewContainerRef;
		viewContainerRef.clear();

		let componentRef = viewContainerRef.createComponent(componentFactory);
		(<AdComponent>componentRef.instance).data = adItem.data;
	}

	getAds() {
		this.interval = setInterval(() => {
			this.loadComponent();
		}, 3000);
	}
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/