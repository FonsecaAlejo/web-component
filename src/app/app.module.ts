import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { createCustomElement } from '@angular/elements';
import { EmisionStep1Component } from './components/emision-step1/emision-step1.component';  


@NgModule({
  declarations: [
    AppComponent,
    EmisionStep1Component
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule { 

  constructor(private injector: Injector) {

    const el = createCustomElement(AppComponent, { injector });
    customElements.define('emision-elements', el);
    
  }
  
    ngDoBootstrap() {}

}
