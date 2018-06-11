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
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AuthGuardService } from '../core/auth-guard.service';
import { ValorEsperadoBancoComponent } from '../telas-adm/valor-esperado-banco/valor-esperado-banco.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'importar-arquivo', component: ImportarArquivoComponent, canActivate: [AuthGuardService] },
  { path: 'visualizar-arquivo', component: VisualizarArquivoComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'banco', component: BancoComponent, canActivate: [AuthGuardService] },
  { path: 'tipo-segmento', component: TipoSegmentoComponent, canActivate: [AuthGuardService] },
  { path: 'leioute', component: LeiouteComponent, canActivate: [AuthGuardService] },
  { path: 'valor-esperado', component: ValorEsperadoBancoComponent, canActivate: [AuthGuardService] },
  { path: 'leioute-cadastrar', component: LeiouteCadastrarComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
