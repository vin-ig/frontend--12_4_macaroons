import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartSummaryType} from "../../types/cart-summary.type";

@Component({
    selector: 'present-component',
    templateUrl: './present.component.html',
    styleUrls: ['./present.component.scss']
})
export class PresentComponent implements OnInit {
    public showPresent: boolean = true

    constructor(public cartService: CartService) {
    }

    get cartInfo(): CartSummaryType {
        return {
            count: this.cartService.count,
            price: this.cartService.price,
            currency: this.cartService.currency,
        }
    }

    ngOnInit(): void {
    }

}
