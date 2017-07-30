import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'ng-router',
    templateUrl: './router.component.html'
})
// <a [routerLink]="['/contact-detail', 1]">
// this._router.navigate(['/contact-detail', 1]);
// this._router.navigateByUrl('contact-detail/1');
export class NgRouterComponent implements OnInit {
    constructor(private _router: Router) { }

    ngOnInit() {
        
    }
    routerTo(path) {
        // this._router.navigateByUrl(path);
        console.log(path);
    }
}
