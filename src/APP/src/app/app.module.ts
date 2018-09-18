import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './data/in-memory-data.service';

import { AppRoutingModule } from './routes/app-routing.module';
import { ApiService } from './services/api.service';
import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportarArquivoComponent } from './importar-arquivo/importar-arquivo.component';
import { ImportarArquivoService } from './importar-arquivo/importar-arquivo.service';
import { NavBarComponent } from './menu/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { VisualizarArquivoComponent } from './visualizar-arquivo/visualizar-arquivo.component';
import { VisualizarArquivoService } from './visualizar-arquivo/visualizar-arquivo.service';
import { LoginService } from './login/login.service';
import { CadastrarUsuarioService } from './cadastrar-usuario/cadastrar-usuario.service';
import { EsqueciSenhaComponent } from './esqueci-senha/esqueci-senha.component';
import { EsqueciSenhaService } from './esqueci-senha/esqueci-senha.service';

//componentes e servicos da area restrita de adm
import { BancoComponent } from './telas-adm/banco/banco.component';
import { BancoService } from './telas-adm/banco/banco.service';
import { TipoSegmentoComponent } from './telas-adm/tipo-segmento/tipo-segmento.component';
import { TipoSegmentoService } from './telas-adm/tipo-segmento/tipo-segmento.service';
import { LeiouteComponent } from './telas-adm/leioute/listar/leioute-lista.component';
import { LeiouteService } from './telas-adm/leioute/leioute.service';
import { LeiouteCadastrarComponent } from './telas-adm/leioute/cadastrar/leioute-cadastrar.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { LocalStorageService } from './core/local-storage.service';
import { EventosService } from './core/eventos.service';
import { AuthGuardService } from './core/auth-guard.service';
import { ButtonViewComponent } from './telas-adm/leioute/components/ng2-smart-table-button.component';
import { MultiSelectComponent } from './telas-adm/leioute/components/multi-select.component';
import { ButtonEditComponent } from './telas-adm/leioute/components/ng2-smart-table-button-edit.component';
import { ValorEsperadoBancoComponent } from './telas-adm/valor-esperado-banco/valor-esperado-banco.component';
import { ValorEsperadoBancoService } from './telas-adm/valor-esperado-banco/valor-esperado-banco.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    SelectModule,
    Ng2SmartTableModule,
    MultiselectDropdownModule,

    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,

    ImportarArquivoComponent,
    VisualizarArquivoComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    EsqueciSenhaComponent,
    ValorEsperadoBancoComponent,

    ButtonViewComponent,
    ButtonEditComponent,
    NavBarComponent,
    MultiSelectComponent,

    BancoComponent,
    TipoSegmentoComponent,
    LeiouteComponent,
    LeiouteCadastrarComponent
  ],
  entryComponents:[
    ButtonViewComponent,
    ButtonEditComponent,
    MultiSelectComponent
  ],
  exports:[
    ButtonViewComponent,
    ButtonEditComponent,
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
    LocalStorageService,
    ValorEsperadoBancoService,


    EventosService,
    AuthGuardService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
