import { Component, OnInit, ViewChild, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { LocalDataSource } from 'ng2-smart-table';
import { ButtonViewComponent } from '../components/ng2-smart-table-button.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EventosService } from 'app/core/eventos.service';
import { ImportarArquivoService } from 'app/telas-gerais/importar-arquivo/importar-arquivo.service';
import { ButtonEditComponent } from 'app/telas-adm/leioute/components/ng2-smart-table-button-edit.component';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { BancoService } from '../../banco/banco.service';
import { Segmento } from '../../tipo-segmento/model/segmento';
import { TipoSegmentoService } from '../../tipo-segmento/tipo-segmento.service';
import { Router } from '@angular/router';
import { DetalheValorEsperadoCadastroComponent } from './modals/detalhes-valor-esperado-cadastro/valor-esperado-cadastro-modal.component';

@Component({
  selector: 'app-leioute-cadastrar',
  templateUrl: './leioute-cadastrar.component.html',
  styleUrls: ['./leioute-cadastrar.component.css']
})
export class LeiouteCadastrarComponent implements OnInit, OnDestroy {
  @ViewChild('detalhesValorEsperado') public childComponentModal: DetalheValorEsperadoCadastroComponent;

  private abrirModalEvent$: Subscription;
  private abrirModalEditEvent$: Subscription;

  cnabSelecionado?: number;
  tipoRegistroSelecionado?: number;

  bancos: Array<Banco>;
  segmentos: Array<Segmento>;

  settings: any;
  data: LocalDataSource;

  listValorEsperado: boolean;

  constructor(private leiouteService: LeiouteService,
    private importarArquivoService: ImportarArquivoService,
    private segmentoService: TipoSegmentoService,
    private bancoService: BancoService,
    private router: Router,
    private modalService: NgbModal) {

      this.bancos = new Array<Banco>();
      this.segmentos = new Array<Segmento>();

      this.listValorEsperado = true;
      this.cnabSelecionado = 0;
      this.tipoRegistroSelecionado = 0;
  }

  ngOnInit() {

    this.initSettings();
    this.obterBancos();
    this.cadastrarEventoAbrirModal();
  }

  ngOnDestroy(): void {
    if (this.abrirModalEvent$) this.abrirModalEvent$.unsubscribe();
    if (this.abrirModalEditEvent$) this.abrirModalEditEvent$.unsubscribe();
  }

  obterBancos() {
    
    this.bancoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterSegmentos() {
    
    this.segmentoService.obterSegmentos().subscribe(response => {
      this.segmentos = response;
    });
  }

  private cadastrarEventoAbrirModal() {
    this.abrirModalEvent$ = EventosService.abriuModalValorEsperado.subscribe(() => {
      this.abriModalValorEsperado();
    });

    this.abrirModalEditEvent$ = EventosService.abriuModalValorEsperadoEdit.subscribe(() => {
      this.abriModalValorEsperadoEdit();
    });
  }

  initSettings() {
    this.settings = {
      hideSubHeader: true,
      attr:{
        class: "table table-bordered table-striped"
      },
      actions: {
        add: false
      },
      edit: {
        inputClass: '',
        editButtonContent: 'Alterar',
        saveButtonContent: 'Salvar',
        cancelButtonContent: 'Cancelar',
        confirmSave: 'teste($event)'
      },
      delete: {
        deleteButtonContent: 'Excluir',
        confirmDelete: false,
      },
      noDataMessage: 'Nenhum registro encontrado',
      columns: {
        posicaoDe: {
          title: 'Posição De', filter: false
        },
        posicaoAte: {
          title: 'Posição Até', filter: false
        },
        descricao: {
          title: 'Descrição', filter: false
        },
        tipoCampo: {
          title: 'Tipo do Campo', filter: false,
          valuePrepareFunction: (cell, row) => {
            switch (row.tipoCampo) {
              case "1": return "Numérico";
              case "2": return "Alfanumérico";
              case "3": return "Data(aaaammdd)";
              case "4": return "Data(ddmmaa)";
              case "5": return "Hora(ddmmaaaaa)";
            }
            return "";
          },
          editor: {
            type: 'list',
            config: {
              list: [{ value: '1', title: 'Numérico' },
              { value: '2', title: 'Alfanumérico' },
              { value: '3', title: 'Data(aaaammdd)' },
              { value: '4', title: 'Data(ddmmaa)' },
              { value: '5', title: 'Hora(ddmmaaaaa)' }
              ]
            }
          }
        },
        obrigatorio: {
          title: 'Obrigatório', filter: false,
          valuePrepareFunction: (cell, row) => { return row.obrigatorio == 1 ? "Sim" : "Não" },
          editor: {
            type: 'list',
            config: {
              list: [{ value: '1', title: 'Sim' },
              { value: '2', title: 'Não' }
              ]
            }
          }

        },
        valorEsperado: {
          title: 'Valor Esperado', filter: false
          , type: 'custom',
          width:'150px',
          renderComponent: ButtonViewComponent,
          onComponentInitFunction(instance) { 
          },
          editor: {
            type: 'custom',
            component: ButtonEditComponent
          }
        }
      }
    };

    this.data = new LocalDataSource();
  }

  teste(evt) {
console.log(evt)
  }

  salvarNovoLeioute() {
    this.data.add({
      posicaoDe: 0,
      posicaoAte: 0,
      descricao: '',
      tipoCampo: "1",
      obrigatorio: "2",
      valorEsperado: '<a class="btn btn-primary" href="javascript:;" (click)="selecionarValorEsperado()">Selecionar</a>'
    });
    this.data.refresh();
  }
  
  abriModalValorEsperado() {
debugger
    this.childComponentModal.listValorEsperado = true;
    this.childComponentModal.openModal();
  }

  abriModalValorEsperadoEdit() {

    this.childComponentModal.listValorEsperado = false;
    this.childComponentModal.openModal();
  }

  voltar() {

    this.router.navigate(['leioute']);
  }
}


