import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[selectOnClick]'
})
export class SelectOnClickDirective {
  @Output() selectOnClick = new EventEmitter<string>();  
  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  public onClick(target:any) {  
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (clickedInside) {     
      const selection = this.getSelectedText();
      this.selectOnClick.emit(selection);
    }
  }

  getSelectedText() {
    const input = this.elementRef.nativeElement;
    const start = input.selectionStart;
    const end = input.selectionEnd;
    return input.value.substr(start, end - start);
  }
}
