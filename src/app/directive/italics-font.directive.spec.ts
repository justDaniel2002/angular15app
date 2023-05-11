import { ItalicsFontDirective } from './italics-font.directive';

describe('ItalicsFontDirective', () => {
  it('should create an instance', () => {
    let elRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new ItalicsFontDirective(elRefMock);
    expect(directive).toBeTruthy();
  });
});
