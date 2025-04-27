import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS} from '@angular/forms';

@Directive({
  selector: '[tdCapitalLetterValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: CapitalLetterValidatorDirective, multi: true}]
})
export class CapitalLetterValidatorDirective {

  validate(control: AbstractControl) {
    console.log('validating');

    const isValid = hasFirstCapitalChar(control.value);

    return isValid ? null : {capitalLetter: true};
  }

}


function hasFirstCapitalChar(text: string): boolean | null {
  if (!text) {
    return null;
  }
  const firstChar = text.charAt(0);

  if (firstChar === firstChar.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
