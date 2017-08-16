import { Component, TemplateRef } from '@angular/core';
@Component({
    selector: 'alert-success',
    template: `<p>Alert success</p>`,
})
export class AlertSuccessComponent { }

@Component({
    selector: 'alert-danger',
    template: `<p>Alert danger</p>`,
})
export class AlertDangerComponent { }
@Component({
    selector: 'simple-sortable-comp',
    template: `
<h4>Simple sortable</h4>
<div class="row">
    <div class="col-sm-4">
        <div class="panel panel-success">
            <div class="panel-heading">
                Favorite drinks
            </div>
            <div class="panel-body">
                <ul class="list-group" dnd-sortable-container [sortableData]="listOne">
                    <li *ngFor="let item of items; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">{{item.name}}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="col-sm-8">
        <div class="panel panel-default">
            <div class="panel-body">
                <div *ngFor="let item of listOne">
                     <ng-container  *ngComponentOutlet="item"></ng-container>
                </div>
            </div>
        </div>
    </div>
</div>`
})
export class SimpleSortableCompComponent {
    success1 = AlertSuccessComponent;
    danger1 = AlertDangerComponent;
    success2 = AlertSuccessComponent;
    danger2 = AlertDangerComponent;
    // <span *ngFor="let item of listOne; let i = index">{{i + 1}}) {{item}}<br/></span>
    // <view-con-ref *ngFor="let item of listOne; [template]="item"></view-con-ref>
    // <ng-container *ngFor="let item of listOne *ngComponentOutlet="item"></ng-container>
    listOne: any = [this.success1, this.danger1,this.success2, this.danger2];
    items:any=[
        {
            "name":"success1",
            "template":this.success1
        },
        {
            "name":"danger1",
            "template":this.danger1
        },
        {
            "name":"success2",
            "template":this.success2
        },
        {
            "name":"danger2",
            "template":this.danger2
        }
    ]
    // listOne: Array<string> = ['success', 'danger'];
    constructor(){
        console.log(this.listOne);
    }
}