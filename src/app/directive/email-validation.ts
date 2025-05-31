import { Directive, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appEmailValidation]'
})
export class EmailValidation {
  @Output() emailValid = new EventEmitter<boolean>();
    constructor(private el: ElementRef) {}

    @HostListener('input') onInput() {
      const input = this.el.nativeElement as HTMLInputElement;
      const value = input.value;

      const regex = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;

      const isValid = regex.test(value);
      this.emailValid.emit(isValid);
      input.style.borderColor = isValid ? 'green' : 'red';
    }


}
