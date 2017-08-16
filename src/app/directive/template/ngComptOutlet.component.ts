import { Component } from '@angular/core';
@Component({
    selector: 'alert-success',
    template: `<p [myHighlight]="textHoverColor" defaultColor="violet">Alert success</p>`,
})
export class AlertSuccessComponent { }

@Component({
    selector: 'alert-danger',
    template: `<p [myHighlight]="textHoverColor" defaultColor="violet">Alert danger</p>`,
})
export class AlertDangerComponent { }

@Component({
    selector: 'ng-compt-outlet',
    template: `
        <h1 [myHighlight]="textHoverColor" defaultColor="violet">Angular version 4</h1>
        <ng-container *ngComponentOutlet="alert"></ng-container>
        <ng-container *ngComponentOutlet="ww"></ng-container>
        <button (click)="changeComponent()">Change component</button>
        <button (click)="addComponent()">Add component</button>
        <div *ngFor="let item of comp">
             <ng-container  *ngComponentOutlet="item"></ng-container>
        </div>
       
    `,
})
export class NgComptOutletComponent {
    alert = AlertSuccessComponent;
    danger = AlertDangerComponent;
    ww = null;
    constructor() {
        console.log(this.ww);
    }
    comp: any = [this.alert,this.danger]
    changeComponent() {
        this.alert = AlertDangerComponent;
    }
    addComponent() {
        this.ww = AlertDangerComponent;
    }
}
