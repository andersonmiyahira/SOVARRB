import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportarArquivoComponent } from './../importar-arquivo/importar-arquivo.component';
import { VisualizarBoletosComponent } from '../visualizar-boletos/visualizar-boletos.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'importar-arquivo', component: ImportarArquivoComponent },
  { path: 'visualizar-boletos', component: VisualizarBoletosComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
