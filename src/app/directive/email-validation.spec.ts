import { EmailValidation } from './email-validation';
import { ElementRef } from '@angular/core';

describe('EmailValidation', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('input'));
    const directive = new EmailValidation(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
