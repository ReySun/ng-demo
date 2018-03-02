import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ng-kissy',
	templateUrl: './kissy.component.html',
	styleUrls: ['./kissy.component.scss']
})
export class KissyComponent implements OnInit {

	constructor() {
		KISSY.config({
			modules: {
				'switchable': {
					alias: ['gallery/switchable/1.3.1/']
				}
			}
		});
		KISSY.use("node,dd,switchable,ua,event,overlay,json,ajax,gallery/easycountdown/1.0/easycountdown,dom",
			function (S, Node, DD, Switchable, UA, Event, Overlay, JSON, Ajax, EasyCountdown) {
				var DDM = DD.DDM,
					DOM = S.DOM;
				S.ready(function () {
					S.all('.J_TWidget').each(function (v, k) {
						try {
							var t = v.attr('data-widget-type'),
								c = v.attr('data-widget-config'),
								cfg = c ? S.JSON.parse(c.replace(/'/ig, '"')) : 0;
							if (cfg) {
								cfg.srcNode = v;
								if (t == 'Slide') {
									new Switchable.Slide(v, cfg);
								} else if (t == 'Carousel') {
									new Switchable.Carousel(v, cfg);
								} else if (t == 'Popup') {
									if (!v.all('.ks-popup-content').length) {
										new Node('<div class="ks-popup-content"></div>').append(v.children()).appendTo(v);
									}
									v.css({
											display: 'block',
											position: 'absolute',
											left: '-9999px',
											top: '-9999px',
											zIndex: 99999
										}),
										new Overlay.Popup(cfg);
								} else if (t == 'Tabs') {
									new Switchable.Tabs(v, cfg);
								} else if (t == 'Accordion') {
									new Switchable.Accordion(v, cfg);
								} else if (t == 'Countdown') {
									new EasyCountdown(v, cfg.endTime, cfg);
								}
							}
						} catch (ex) {
							// console && console.error(ex);
						}
					});
				});
			}
		);
	 }

	ngOnInit() {
	}

}
