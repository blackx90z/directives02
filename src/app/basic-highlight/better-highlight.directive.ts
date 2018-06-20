import { Directive, HostBinding, Input } from '@angular/core';
import { BetterHighlightDirective, Directive, Renderer2, OnInit, ElementRef, HostListener } from './../better-highlight/better-highlight.directive';


@Directive({
    selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

    constructor (private renderer: Renderer2,private elementRef: ElementRef){}

    
    
    // ngOnInit(){
    //     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // }


    // binding to directive property
    @Input() defaultColor: string =  'transparent';
    @Input('betterHighlight') highlightColor: string = 'blue';
@HostBinding ('style.backgroundColor') backgroundColor: string = this.defaultColor;

ngOnInit(){

}
// bind to host property using HostBinding
//define in string
//camelCase property name because we are accessing DOM property not CSS




// ngOnInit(){
//     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
// }

// @HostListener('mouseenter') mouseEnter(){ //host listener decorator is added to a method we want to execute on an event
//     //listening for mouseenter event on host
// the host we are listening for is added as an argument to Hostlistener
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
}

// @HostListener('mouseleave') mouseOut(){
//     //listening for mouseleave event on host
//     this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
// }




@HostListener('mouseenter') mouseEnter(){ //host listener decorator is added to a method we want to execute on an event
    this.backgroundColor = this.highlightColor;
// }

@HostListener('mouseleave') mouseOut(){
    
    this.backgroundColor = this.defaultColor;
// }
}
