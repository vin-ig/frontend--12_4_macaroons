import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    count: number = 0
    price: number = 0
    currency: string = ''

    constructor() {
    }
}
