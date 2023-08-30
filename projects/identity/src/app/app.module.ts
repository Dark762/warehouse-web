import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';

import { CommonModule } from '@angular/common';
import { CommonSharedModule } from 'src/shared/common-module/common.shared.module';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    CommonSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
