import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorFont]',
  standalone: true
})
export class ColorFontDirective {

  @Input() color = 'red'
  constructor(private element : ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter1(){
    this.element.nativeElement.style.color = this.color
  }

  @HostListener('mouseleave')
  onMouseLeave2(){
    this.element.nativeElement.style.color = 'black'
  }
}
