import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private el: ElementRef) { }


  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.classList.add("color");
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.classList.remove("color");
  }

}
