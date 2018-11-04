import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImportarArquivoComponent } from 'app/telas-gerais/importar-arquivo/importar-arquivo.component';
import { CadastrarUsuarioComponent } from 'app/telas-gerais/cadastrar-usuario/cadastrar-usuario.component';
import { LoginComponent } from 'app/login/login.component';
import { VisualizarArquivoComponent } from 'app/telas-gerais/visualizar-arquivo/visualizar-arquivo.component';
import { EsqueciSenhaComponent } from 'app/telas-gerais/esqueci-senha/esqueci-senha.component';
import { BancoComponent } from 'app/telas-adm/banco/banco.component';
import { TipoSegmentoComponent } from 'app/telas-adm/tipo-segmento/tipo-segmento.component';
import { LeiouteComponent } from 'app/telas-adm/leioute/listar/leioute-lista.component';
import { LeiouteCadastrarComponent } from 'app/telas-adm/leioute/cadastrar/leioute-cadastrar.component';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { AuthGuardService } from 'app/core/auth-guard.service';
import { ValorEsperadoBancoComponent } from 'app/telas-adm/valor-esperado-banco/valor-esperado-banco.component';
import { AcessoNegadoComponent } from 'app/acesso-negado/acesso-negado.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: ImportarArquivoComponent, canActivate: [AuthGuardService] },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'importar-arquivo', component: ImportarArquivoComponent, canActivate: [AuthGuardService] },
  { path: 'visualizar-arquivo', component: VisualizarArquivoComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrar-usuario', component: CadastrarUsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'esqueci-senha', component: EsqueciSenhaComponent },
  { path: 'banco', component: BancoComponent, canActivate: [AuthGuardService] },
  { path: 'segmento', component: TipoSegmentoComponent, canActivate: [AuthGuardService] },
  { path: 'layout', component: LeiouteComponent, canActivate: [AuthGuardService] },
  { path: 'valor-esperado', component: ValorEsperadoBancoComponent, canActivate: [AuthGuardService] },
  { path: 'layout-cadastrar', component: LeiouteCadastrarComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
