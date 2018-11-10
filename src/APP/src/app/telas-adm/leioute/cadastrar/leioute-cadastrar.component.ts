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
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Layout } from '../models/layout';

@Component({
  selector: 'app-leioute-cadastrar',
  templateUrl: './leioute-cadastrar.component.html',
  styleUrls: ['./leioute-cadastrar.component.css']
})
export class LeiouteCadastrarComponent implements OnInit, OnDestroy {
  @ViewChild('detalhesValorEsperado') public childComponentModal: DetalheValorEsperadoCadastroComponent;

  public form: FormGroup;
  private abrirModalEvent$: Subscription;
  private abrirModalEditEvent$: Subscription;

  bancos: Array<Banco>;
  segmentos: Array<Segmento>;

  settings: any;
  data: LocalDataSource;

  listValorEsperado: boolean;
  model: Layout;

  constructor(private leiouteService: LeiouteService,
    private importarArquivoService: ImportarArquivoService,
    private segmentoService: TipoSegmentoService,
    private bancoService: BancoService,
    private router: Router,
    private modalService: NgbModal) {

    this.bancos = new Array<Banco>();
    this.segmentos = new Array<Segmento>();

    this.listValorEsperado = true;
    this.model = new Layout();
  }

  ngOnInit() {

    this.initSettings();
    this.obterBancos();
    this.obterSegmentos();
    this.cadastrarEventoAbrirModal();
    this.initFormControl();
  }

  initFormControl() {

    this.form = new FormGroup({
      banco: new FormControl(this.model.bancoId, [
        Validators.required
      ]),
      cnab: new FormControl(this.model.tipoCNABId, [
        Validators.required
      ]),
      tipoRegistro: new FormControl(this.model.tipoRegsitroId, [
        Validators.required
      ]),
      tipoTransacao: new FormControl(this.model.tipoTransacaoId, [
        Validators.required
      ]),
      segmento: new FormControl(this.model.segmentoId, []),
      tipoRetorno: new FormControl(this.model.tipoBoletoId, [
        Validators.required
      ])
    });
  }

  setValidacaoSegmento(add: boolean) {

    this.form.get('segmento').clearValidators();
    this.form.get('segmento').setValidators([]);
    if (add) {
      this.form.get('segmento').setValidators([Validators.required]);
    }
    this.form.get('segmento').updateValueAndValidity();
  }

  onChangeSelect($event) {

    if (this.model.tipoCNABId == 1 && this.model.tipoRegsitroId == 2) {
      this.setValidacaoSegmento(true);
    } else {
      this.setValidacaoSegmento(false);
    }
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
    this.abrirModalEvent$ = EventosService.abriuModalValorEsperado.subscribe(model => {
      this.abriModalValorEsperado(model);
    });

    this.abrirModalEditEvent$ = EventosService.abriuModalValorEsperadoEdit.subscribe(model => {
      this.abriModalValorEsperadoEdit(model);
    });
  }

  initSettings() {
    this.settings = {
      noDataMessage: 'Nenhum registro encontrado',
      hideSubHeader: true,
      attr: {
        class: "table table-bordered table-striped"
      },
      actions: {
        add: false
      },
      edit: {
        inputClass: '',
        editButtonContent: 'Alterar',
        saveButtonContent: 'Salvar',
        cancelButtonContent: 'Cancelar'
      },
      delete: {
        deleteButtonContent: 'Excluir',
        confirmDelete: false,
      },
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
        tipoCampoId: {
          title: 'Tipo do Campo', filter: false,
          valuePrepareFunction: (cell, row) => {
            switch (row.tipoCampoId) {
              case 1: return "Numérico";
              case 2: return "Alfanumérico";
              case 3: return "Data(aaaammdd)";
              case 4: return "Data(ddmmaa)";
              case 5: return "Hora(ddmmaaaaa)";
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
          width: '150px',
          renderComponent: ButtonViewComponent,
          onComponentInitFunction(instance) {
          },
          editor: {
            type: 'custom',
            component: ButtonEditComponent,
            valuePrepareFunctio: (cell, row) => {
              //console.log('oi')
              return `a`;
          },
          }
        }
      }
    };

    this.data = new LocalDataSource();
  }

  salvarNovoLeioute() {

    let objCopy = Object.assign({}, this.model);
    objCopy.posicaoDe = 0;
    objCopy.posicaoAte = 0;
    objCopy.tipoCampoId = 1;
    objCopy.descricao = "";
    objCopy.obrigatorio = true;

    this.data.add(objCopy);
    this.data.refresh();
  }

  abriModalValorEsperado(model) {

    this.childComponentModal.listValorEsperado = true;
    this.childComponentModal.openModal(model, false);
  }

  abriModalValorEsperadoEdit(model) {

    this.childComponentModal.listValorEsperado = false;
    this.childComponentModal.openModal(model, true);
  }

  voltar() {

    this.router.navigate(['layout']);
  }

  salvarLeiouteConfigurado() {

    console.log(this.data);
  }

  onEditConfirm(event) {

  }
}
