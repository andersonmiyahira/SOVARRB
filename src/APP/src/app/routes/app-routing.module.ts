import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportarArquivoComponent } from './../importar-arquivo/importar-arquivo.component';
import { CadastrarUsuarioComponent } from '../cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from '../login/login.component';
import { VisualizarArquivoComponent } from '../visualizar-arquivo/visualizar-arquivo.component';
import { EsqueciSenhaComponent } from '../esqueci-senha/esqueci-senha.component';
import { BancoComponent } from '../telas-adm/banco/banco.component';
import { TipoSegmentoComponent } from '../telas-adm/tipo-segmento/tipo-segmento.component';
import { LeiouteComponent } from '../telas-adm/leioute/listar/leioute-lista.component';
import { LeiouteCadastrarComponent } from '../telas-adm/leioute/cadastrar/leioute-cadastrar.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'importar-arquivo', component: ImportarArquivoComponent },
  { path: 'visualizar-arquivo', component: VisualizarArquivoComponent },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'banco', component: BancoComponent },
  { path: 'tipo-segmento', component: TipoSegmentoComponent },
  { path: 'leioute', component: LeiouteComponent },
  { path: 'leioute-cadastrar', component: LeiouteCadastrarComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
