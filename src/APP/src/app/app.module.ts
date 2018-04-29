import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule }     from './routes/app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';  
import { ImportarArquivoComponent } from './importar-arquivo/importar-arquivo.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule, 
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
   
    ImportarArquivoComponent
  ],
  providers: [  ], 
  bootstrap: [ AppComponent ]
})
export class AppModule { }
