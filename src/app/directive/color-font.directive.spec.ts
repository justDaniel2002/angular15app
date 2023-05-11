import { ColorFontDirective } from './color-font.directive';

describe('ColorFontDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new ColorFontDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
