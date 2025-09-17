import {Injectable} from '@angular/core';
import {ProductType} from "../types/product.type";

@Injectable()
export class ProductService {

    constructor() {
    }

    getProducts(): ProductType[] {
        return [
            {
                image: 'product-1.png',
                name: 'Макарун с малиной',
                amount: 1,
                price: 110,
                currency: 'руб.',
            },
            {
                image: 'product-2.png',
                name: 'Макарун с манго',
                amount: 1,
                price: 125,
                currency: 'руб.',
            },
            {
                image: 'product-3.png',
                name: 'Макарун с ванилью',
                amount: 1,
                price: 100,
                currency: 'руб.',
            },
            {
                image: 'product-4.png',
                name: 'Макарун с фисташками',
                amount: 1,
                price: 130,
                currency: 'руб.',
            },
        ]
    }
}
