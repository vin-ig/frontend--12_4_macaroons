import {Component, OnInit} from '@angular/core';
import {AppComponent} from "../../app.component";

@Component({
    selector: 'footer-component',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    protected readonly AppComponent = AppComponent;
}
