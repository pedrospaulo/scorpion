import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DestaqueComponent } from './pages/destaque/destaque.component';
import { EsporteComponent } from './pages/esporte/esporte.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DestaqueComponent,
    EsporteComponent,
    ContatoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
