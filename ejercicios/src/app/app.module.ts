import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ejercicio1Component } from './components/ejercicio1/ejercicio1.component';

import { FormsModule }  from'@angular/forms';
import { Ejercicio2Component } from './components/ejercicio2/ejercicio2.component';
import { Ejercicio3Component } from './components/ejercicio3/ejercicio3.component';
import { Ejercicio4Component } from './components/ejercicio4/ejercicio4.component';
import { Ejercicio5Component } from './components/ejercicio5/ejercicio5.component';
import { AsteriscadorPipe } from './pipes/asteriscador.pipe';
import { VaderPipe } from './pipes/vader.pipe';
import { TrimestradorPipe } from './pipes/trimestrador.pipe';
import { NumformatterPipe } from './pipes/numformatter.pipe';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    Ejercicio1Component,
    Ejercicio2Component,
    Ejercicio3Component,
    Ejercicio4Component,
    Ejercicio5Component,
    AsteriscadorPipe,
    VaderPipe, 
    TrimestradorPipe, NumformatterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
