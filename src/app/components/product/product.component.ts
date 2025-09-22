import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductType} from "../../types/product.type";

@Component({
    selector: 'product-components',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
    private _product!: ProductType

    @Input()
    get product(): ProductType {
        return this._product
    }

    @Output() addToCartEvent: EventEmitter<ProductType> = new EventEmitter<ProductType>()

    set product(param: ProductType) {
        this._product = param
    }

    constructor() {
    }

    ngOnInit(): void {
    }

    addProductToCart() {
        this.addToCartEvent.emit(this._product)
        // this.addToCartEvent.emit(this.titleComponent.toUpper())
    }
}
