import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
    selector: '[buttonEffects]'
})
export class ButtonEffectsDirective {
    @Input() buttonDefaultBgColor: string = 'linear-gradient(90deg, rgb(113,8,30) 0%, rgb(215,72,92) 100%)'
    @Input() buttonHoverBgColor: string = 'orange'

    constructor(private el: ElementRef, private rend: Renderer2) {
    }

    @HostListener('mouseover')
    onHover() {
        this.changeElementBgColor(this.buttonHoverBgColor)
    }

    @HostListener('mouseout')
    offHover() {
        this.changeElementBgColor(this.buttonDefaultBgColor)
    }

    private changeElementBgColor(color: string) {
        this.rend.setStyle(this.el.nativeElement, 'background', color)
    }
}
