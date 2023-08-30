import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaptchaComponent } from './components/captcha/captcha.component';



@NgModule({
  declarations: [CaptchaComponent],
  imports: [
    CommonModule
  ],
  exports : [
    CaptchaComponent
  ]
})
export class CommonSharedModule { }
