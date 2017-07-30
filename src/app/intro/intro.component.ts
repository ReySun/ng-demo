import { Component, OnInit, Input, Inject } from '@angular/core';
import { ExampleDef } from '../example.model';
@Component({
    selector: 'app-intro',
    templateUrl: './intro.component.html'
})
export class IntroComponent implements OnInit {
    constructor( @Inject('ExampleDefs') public examples: ExampleDef[]) { }

    ngOnInit() {
        console.log(this.examples);
    }

}
