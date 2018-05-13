import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './routes/app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ImportarArquivoComponent } from './importar-arquivo/importar-arquivo.component';
import { VisualizarBoletosComponent } from './visualizar-boletos/visualizar-boletos.component';
import { ImportarArquivoService } from './importar-arquivo/importar-arquivo.service';
import { ApiService } from './services/api.service';

import { FileUploadModule } from 'ng2-file-upload';
import { SelectModule } from 'ng2-select';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    FileUploadModule,
    SelectModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    DashboardComponent,

    ImportarArquivoComponent,
    VisualizarBoletosComponent
  ],
  providers: [ImportarArquivoService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
