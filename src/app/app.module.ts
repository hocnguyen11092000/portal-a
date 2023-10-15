import {
  ApplicationRef,
  CUSTOM_ELEMENTS_SCHEMA,
  DoBootstrap,
  Injector,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const el = createCustomElement(AppComponent, { injector: this.injector });
    customElements.define('ng-portal-a', el);
  }
}
