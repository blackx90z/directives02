import { BetterHighlightDirective } from './../better-highlight/better-highlight.directive';


@Directive({
    selector: '[betterHighlight]'
})

export class BetterHighlightDirective implements OnInit{

constructor (private renderer: Renderer2,private elementRef: ElementRef){
}
ngOnInit(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
}
}
