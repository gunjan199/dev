import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
    'selector' : '[myHighlight]'     
})
export class ProductDirective{
    constructor(private el: ElementRef){}
           
        @Input('myHighlight') highlightColor: string;
       
        private ColorHighlight(color: string){
           this.el.nativeElement.style.backgroundColor = color;
        }
        
        @HostListener('mouseenter') onMouseEnter(){
            this.ColorHighlight(this.highlightColor);
        }
        @HostListener('mouseleave') onMouseLeave(){
            this.ColorHighlight(null);
        }
    
}