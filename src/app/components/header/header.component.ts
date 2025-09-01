import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'header-component',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor() {
    }


    ngOnInit(): void {
    }

    public openMenu(target: HTMLElement): void {
        target.classList.add('open')
    }

    public closeMenu(target: HTMLElement): void {
        target.classList.remove('open')
    }
}
