import { Component } from '@angular/core';
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
    selector: 'ng-compt-outlet',
    template: `
        <h1>Angular version 4</h1>
        <ng-container *ngComponentOutlet="alert"></ng-container>
        <button (click)="changeComponent()">Change component</button>
    `,
})
export class NgComptOutletComponent {
    alert = AlertSuccessComponent;
    changeComponent() {
        this.alert = AlertDangerComponent;
    }
}
