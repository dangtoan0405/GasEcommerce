import { Directive, ElementRef, Output, EventEmitter, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
    selector: '[clickOutside]'
})
export class ClickOutsideDirective {
    constructor(
        private elementRef: ElementRef,
        private render: Renderer2) {
    }

    @Output()
    public clickOutside = new EventEmitter();
    @Input() isShow = false;
    @HostListener('document:click', ['$event.target'])
    public onClick(targetElement: any) {
        const clickedInside = this.elementRef.nativeElement.contains(targetElement);
        console.log('log', clickedInside);
        if (!clickedInside && !this.isShow) {
            this.render.removeClass(this.elementRef.nativeElement, 'show');
            this.clickOutside.emit(true);
        } else {
            this.render.addClass(this.elementRef.nativeElement, 'show');
            this.clickOutside.emit(false);
        }
    }
}
