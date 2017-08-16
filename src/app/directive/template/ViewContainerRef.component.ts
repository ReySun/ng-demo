import { Component, OnInit, ViewContainerRef, Input, TemplateRef } from '@angular/core';


@Component({
    selector: 'view-con-ref',
    template:``
})

export class ViewContainerRefComponent implements OnInit {
    @Input() template: any;
    constructor(private _viewContainerRef: ViewContainerRef) { }

    ngOnInit() {
        if (this.template) {
            this._viewContainerRef.createEmbeddedView(this.template);
        }
    }
}

