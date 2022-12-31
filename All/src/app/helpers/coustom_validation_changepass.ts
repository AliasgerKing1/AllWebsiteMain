import { FormGroup } from '@angular/forms';

export let checkPass = () => {
  return function (pass: FormGroup) {
    let checkpass = pass.controls['new_pass'];
    let checkrepass = pass.controls['conf_new_pass'];
    if (checkpass.errors && !checkpass.errors['passErr']) {
      return;
    }
    if (checkpass.value != checkrepass.value) {
      checkrepass.setErrors({ passErr: true });
    }
  };
};
