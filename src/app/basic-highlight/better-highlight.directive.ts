import { Directive } from '@angular/core';
import { BetterHighlightDirective, Directive, Renderer2, OnInit, ElementRef, HostListener } from './../better-highlight/better-highlight.directive';


@Directive({
    selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

constructor (private renderer: Renderer2,private elementRef: ElementRef){
}
ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
}

@HostListener('mouseenter') mouseEnter(){ //host listener decorator is added to a method we want to execute on an event
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
}

@HostListener('mouseleave') mouseOut(){
    //listening for mouseleave event on host
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
}

}
