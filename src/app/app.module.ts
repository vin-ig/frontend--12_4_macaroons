import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {PresentComponent} from './components/present/present.component';
import {FormsModule} from "@angular/forms";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { ButtonEffectsDirective } from './directives/button-effects.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PresentComponent,
        AdvantageComponent,
        ProductComponent,
        ButtonEffectsDirective
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PresentComponent,
    ]
})
export class AppModule {
}
