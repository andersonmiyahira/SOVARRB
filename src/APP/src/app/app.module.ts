import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './routes/app-routing.module';
import { ApiService } from './services/api.service';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { SimpleNotificationsModule } from 'angular2-notifications';

//componentes e servicos gerais do sistema
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportarArquivoComponent } from './telas-gerais/importar-arquivo/importar-arquivo.component';
import { ImportarArquivoService } from './telas-gerais/importar-arquivo/importar-arquivo.service';
import { NavBarComponent } from './menu/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './telas-gerais/cadastrar-usuario/cadastrar-usuario.component';
import { VisualizarArquivoComponent } from './telas-gerais/visualizar-arquivo/visualizar-arquivo.component';
import { VisualizarArquivoService } from './telas-gerais/visualizar-arquivo/visualizar-arquivo.service';
import { LoginService } from './login/login.service';
import { CadastrarUsuarioService } from './telas-gerais/cadastrar-usuario/cadastrar-usuario.service';
import { EsqueciSenhaComponent } from './telas-gerais/esqueci-senha/esqueci-senha.component';
import { EsqueciSenhaService } from './telas-gerais/esqueci-senha/esqueci-senha.service';

//componentes e servicos da area restrita de adm
import { BancoComponent } from './telas-adm/banco/banco.component';
import { BancoService } from './telas-adm/banco/banco.service';
import { TipoSegmentoComponent } from './telas-adm/tipo-segmento/tipo-segmento.component';
import { TipoSegmentoService } from './telas-adm/tipo-segmento/tipo-segmento.service';
import { LeiouteComponent } from './telas-adm/leioute/listar/leioute-lista.component';
import { LeiouteService } from './telas-adm/leioute/leioute.service';
import { LeiouteCadastrarComponent } from './telas-adm/leioute/cadastrar/leioute-cadastrar.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { EventosService } from './core/eventos.service';
import { AuthGuardService } from './core/auth-guard.service';
import { MultiSelectComponent } from './telas-adm/leioute/components/multi-select.component';
import { ValorEsperadoBancoComponent } from './telas-adm/valor-esperado-banco/valor-esperado-banco.component';
import { ValorEsperadoBancoService } from './telas-adm/valor-esperado-banco/valor-esperado-banco.service';
import { DetalheValorEsperadoComponent } from './telas-adm/leioute/listar/modals/detalhes-valor-esperado/valor-esperado-modal.component';
import { ExcluirLayoutModalComponent } from './telas-adm/leioute/listar/modals/excluir/excluir-layout-modal.component';
import { EditarLayoutModalComponent } from './telas-adm/leioute/listar/modals/editar/editar-layout-modal.component';
import { DetalheValorEsperadoCadastroComponent } from './telas-adm/leioute/cadastrar/modals/detalhes-valor-esperado-cadastro/valor-esperado-cadastro-modal.component';
import { AuthService } from './services/auth.service';
import { JwtService } from './services/jwt.service';
import { HttpTokenInterceptor } from './shared/interceptors/http-token.interceptor';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { LoaderInterceptorService } from './shared/interceptors/load-screen.interceptor';
import { LoaderService } from './load-screen/service/load-screen.service';
import { HttpErrorInterceptor } from './shared/interceptors/http-error.interceptor';
import { ExcluirLayoutCadastroModalComponent } from './telas-adm/leioute/cadastrar/modals/excluir-cadastro/excluir-layout-modal-cadastro.component';
import { EditarLayoutModalCadastroComponent } from './telas-adm/leioute/cadastrar/modals/editar-cadastro/editar-layout-modal-cadastro.component';
import Helpers from './core/helpers';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule, 
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    SelectModule,
    Ng2SmartTableModule,
    MultiselectDropdownModule,
    NgbModule.forRoot(),
    SimpleNotificationsModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AcessoNegadoComponent,
    LoadScreenComponent,
    DashboardComponent,

    ImportarArquivoComponent,
    VisualizarArquivoComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    EsqueciSenhaComponent,
    ValorEsperadoBancoComponent,

    //modais
    DetalheValorEsperadoComponent,
    DetalheValorEsperadoCadastroComponent,
    ExcluirLayoutModalComponent,
    EditarLayoutModalComponent,
    ExcluirLayoutCadastroModalComponent,
    EditarLayoutModalCadastroComponent,


    NavBarComponent,
    MultiSelectComponent,

    BancoComponent,
    TipoSegmentoComponent,
    LeiouteComponent,
    LeiouteCadastrarComponent
  ],
  entryComponents: [
    MultiSelectComponent
  ],
  exports: [
    MultiSelectComponent
  ],
  providers: [
    ImportarArquivoService,
    VisualizarArquivoService,
    LoginService,
    CadastrarUsuarioService,
    EsqueciSenhaService,

    BancoService,
    TipoSegmentoService,
    LeiouteService,
    ValorEsperadoBancoService,

    EventosService,
    AuthGuardService,
    ApiService,
    AuthService,
    JwtService,
    LoaderService,
    Helpers,
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
