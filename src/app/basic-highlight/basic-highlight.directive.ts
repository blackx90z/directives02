import { Directive} from '@angular/core';

@Directive({
    selector:'[basicHighlight]'// camelCase selector when in directives instead of dashes
})

export class BasicHighlightDirective{
constructor(private elementRef: ElementRef) {} // to access the element that the directive sits on

// doesnt have a lifecycle hooks because there is no template associated with a directive
ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';

}

ngOnDestory(){

}
}