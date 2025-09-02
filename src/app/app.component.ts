import {Component} from '@angular/core';
import {AdvantageType} from "./types/advantage.type";
import {ProductType} from "./types/product.type";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
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

    public products: ProductType[] = [
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

    public formValues = {
        productTitle: '',
        name: '',
        phone: '',
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
