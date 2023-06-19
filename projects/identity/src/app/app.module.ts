import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RecoveryPasswordComponent } from './components/recovery-password/recovery-password.component';
import { LibModuleModule } from 'shared/lib-app/src/lib/shared-module/lib-module/lib-module.module';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RecoveryPasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    LibModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
