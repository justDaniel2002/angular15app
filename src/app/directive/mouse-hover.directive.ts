import { Directive, Input } from '@angular/core';
import { ItalicsFontDirective } from './italics-font.directive';
import { ColorFontDirective } from './color-font.directive';

@Directive({
  selector: '[appMouseHover]',
  standalone: true,
  hostDirectives: [{
   directive: ItalicsFontDirective,
   outputs:['hover1']
  }, {
   directive: ColorFontDirective,
   inputs:['color']
  }
  ],
})
export class MouseHoverDirective {

  constructor() { }

}
