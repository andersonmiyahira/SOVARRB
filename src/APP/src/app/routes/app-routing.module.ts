import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportarArquivoComponent } from './../importar-arquivo/importar-arquivo.component';
import { CadastrarUsuarioComponent } from '../cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from '../login/login.component';
import { VisualizarArquivoComponent } from '../visualizar-arquivo/visualizar-arquivo.component';
import { EsqueciSenhaComponent } from '../esqueci-senha/esqueci-senha.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'importar-arquivo', component: ImportarArquivoComponent },
  { path: 'visualizar-arquivo', component: VisualizarArquivoComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
