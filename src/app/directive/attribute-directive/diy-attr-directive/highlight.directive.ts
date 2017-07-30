import { Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
    selector: '[myHighlight]'
})
export class HighlightDirective {
    @Input('myHighlight') highlightColor: string;//重命名输入属性
    @Input() defaultColor: string;

    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.defaultColor || this.highlightColor || 'yellow');
    }
    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }
    @HostListener('click') onClick() {
        console.log(this.el.nativeElement.innerHTML);
    }
    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}