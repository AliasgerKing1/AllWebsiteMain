import { FormGroup } from '@angular/forms';

export let checkPass = () => {
  return function (pass: FormGroup) {
    let checkpass = pass.controls['password'];
    let checkrepass = pass.controls['re_password'];
    if (checkpass.errors && !checkpass.errors['passErr']) {
      return;
    }
    if (checkpass.value != checkrepass.value) {
      checkrepass.setErrors({ passErr: true });
    }
  };
};

export let checkLength = () => {
  return function (contact: FormGroup) {
    let checklength = contact.controls['contact'];
    if (checklength.errors && !checklength.errors['lengthErr']) {
      return;
    }
    if (checklength.value.length != 10) {
      checklength.setErrors({ lengthErr: true });
    }
  };
};

export let checkNum = () => {
  return function (num: FormGroup) {
    let checknum = num.controls['contact'];
    if (checknum.errors && !checknum.errors['numErr']) {
      return;
    }
    if (isNaN(checknum.value)) {
      checknum.setErrors({ numErr: true });
    }
  };
};
