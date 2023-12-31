import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
