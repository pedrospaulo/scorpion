import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { DestaqueComponent } from './pages/destaque/destaque.component';
import { EsporteComponent } from './pages/esporte/esporte.component';
import { ContatoComponent } from './pages/contato/contato.component';

const routes: Routes = [

  { path: '', component: InicioComponent},
  { path: 'destaque', component: DestaqueComponent },
  { path: 'esporte', component: EsporteComponent },
  { path: 'contato', component: ContatoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
