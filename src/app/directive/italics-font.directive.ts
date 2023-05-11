import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appItalicsFont]',
  standalone: true
})
export class ItalicsFontDirective {

  @Output() hover1 = new EventEmitter()
  constructor(private element : ElementRef<HTMLElement>) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.element.nativeElement.style.fontStyle = 'italic'
    this.hover1.emit()
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.element.nativeElement.style.fontStyle = 'normal'
  }

}
