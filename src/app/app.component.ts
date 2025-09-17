import {Component, OnInit} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";
import {ProductService} from "./services/product.service";

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

    constructor(private productService: ProductService) {
    }

    public advantages: AdvantageType[] = [
        {
            title: 'Лучшие продукты',
            text: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.',
        },
        {
            title: 'Много вкусов',
            text: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.',
        },
        {
            title: 'Бисквитное тесто',
            text: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!',
        },
        {
            title: 'Честный продукт',
            text: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
        },
    ]

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
