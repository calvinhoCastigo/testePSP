import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { TransacaoComponent } from './transacao/transacao.component';
import { ListaTransacaoComponent } from './lista-transacao/lista-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TransacaoComponent,
    ListaTransacaoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
