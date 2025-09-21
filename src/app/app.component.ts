import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";
import {CartService} from "./services/cart.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [ProductService],
})

export class AppComponent implements OnInit{
    public static contacts = {
        phone: '+375 (29) 368-98-68',
        instagramLink: '#',
    }

    constructor(private productService: ProductService,
                private cartService: CartService) {
    }

    public products: ProductType[] = []

    public formValues = {
        productTitle: '',
        name: '',
        phone: '',
    }

    ngOnInit() {
        this.products = this.productService.getProducts()
    }

    public scrollTo(target: HTMLElement): void {
        target.scrollIntoView({behavior: 'smooth'})
    }

    public addToCart(product: ProductType, target: HTMLElement): void {
        this.scrollTo(target)
        this.formValues.productTitle = product.name.toUpperCase()

        this.cartService.count++
        this.cartService.price += product.price
        this.cartService.currency = product.currency  // Для простоты не учитываем случай, если будут разные валюты
    }

    public createOrder(): void {
        if (!this.formValues.productTitle) {
            alert('Выберите макарун!')
            return
        }
        if (!this.formValues.name) {
            alert('Введите имя!')
            return
        }
        if (!this.formValues.phone) {
            alert('Введите телефон!')
            return
        }

        alert('Спасибо за заказ!')
        this.formValues = {
            productTitle: '',
            name: '',
            phone: '',
        }
    }

}
