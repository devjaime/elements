import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core'; // se agrega injector
import { createCustomElement} from '@angular/elements'; // se agrega createCustomElement

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  /*bootstrap: [AppComponent]*/ // se comenta el bootstrap de nuestra aplicación
  entryComponents:[AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent,{injector});
    customElements.define('my-button', el); // importante el tag <my-button>tiene que tener siempre un guion
  }
  ngDoBootstrap() {

  }
 }
