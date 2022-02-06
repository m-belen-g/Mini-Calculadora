import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AliciaEdadComponent } from './alicia-edad/alicia-edad.component';
import { PorcentajeComponent } from './porcentaje/porcentaje.component';

@NgModule({
  declarations: [
    AppComponent,
    AliciaEdadComponent,
    PorcentajeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
