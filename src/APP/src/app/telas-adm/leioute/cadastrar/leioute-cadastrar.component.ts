import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Banco } from 'app/telas-adm/banco/models/banco';
import { BancoService } from '../../banco/banco.service';
import { Segmento } from '../../tipo-segmento/model/segmento';
import { TipoSegmentoService } from '../../tipo-segmento/tipo-segmento.service';
import { Router } from '@angular/router';
import { DetalheValorEsperadoCadastroComponent } from './modals/detalhes-valor-esperado-cadastro/valor-esperado-cadastro-modal.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Layout } from '../models/layout';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { ExcluirLayoutCadastroModalComponent } from './modals/excluir-cadastro/excluir-layout-modal-cadastro.component';
import { EditarLayoutModalCadastroComponent } from './modals/editar-cadastro/editar-layout-modal-cadastro.component';
import { LayoutList } from '../models/layout-list';
import Helpers from 'app/core/helpers';
import { ValorEsperado } from 'app/telas-adm/valor-esperado-banco/model/valor-esperado';
import { ValorEsperadoBancoService } from 'app/telas-adm/valor-esperado-banco/valor-esperado-banco.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-leioute-cadastrar',
  templateUrl: './leioute-cadastrar.component.html',
  styleUrls: ['./leioute-cadastrar.component.css']
})
export class LeiouteCadastrarComponent implements OnInit, OnDestroy {
  @ViewChild('excluirLayoutModal') childExcluirLayoutModal: ExcluirLayoutCadastroModalComponent;
  @ViewChild('editarLayoutModal') childEditarLayoutModal: EditarLayoutModalCadastroComponent;

  public form: FormGroup;
  public layouts: Array<Layout>;

  bancos: Array<Banco>;
  segmentos: Array<Segmento>;

  settings: any;

  listValorEsperado: boolean;
  model: Layout;

  valoresEsperados: IMultiSelectOption[];

  constructor(private leiouteService: LeiouteService,
    private segmentoService: TipoSegmentoService,
    private bancoService: BancoService,
    private router: Router,
    private valorEsperadoService: ValorEsperadoBancoService,
    private _notifications: NotificationsService) {

    this.bancos = new Array<Banco>();
    this.segmentos = new Array<Segmento>();

    this.listValorEsperado = true;
    this.model = new Layout();
    this.layouts = new Array<Layout>();
  }

  ngOnInit() {

    this.obterBancos();
    this.obterSegmentos();
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
      tipoRegistro: new FormControl(this.model.tipoRegistroId, [
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

  ngOnDestroy(): void {
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

  salvarNovoLeioute() {

    let objCopy = Object.assign({}, this.model);
    objCopy.posicaoDe = 0;
    objCopy.posicaoAte = 0;
    objCopy.tipoCampoId = 1;
    objCopy.descricao = "";
    objCopy.tipoCampoDescricao = "Numérico";
    objCopy.obrigatorio = true;
    objCopy.idLayoutReference = Helpers.NewGuid();

    this.layouts.push(objCopy);
  }
 
  voltar() {

    this.router.navigate(['layout']);
  }

  onChangeSelect($event) {

    if (this.model.tipoCNABId == 1 && this.model.tipoRegistroId == 2) {
      this.setValidacaoSegmento(true);
    } else {
      this.setValidacaoSegmento(false);
    }
  }

  salvarLeiouteConfigurado() {

    this.leiouteService.inserirVarios(this.layouts).subscribe(res => {
      this._notifications.success("Sucesso", "Layout salvo com sucesso.");
    });
  }

  /* Abertura de modais */
  editar(editarModal, model) {

    const filters = new ValorEsperado();
    filters.banco = new Banco();
    filters.banco.id = this.model.bancoId;
    filters.bancoId = this.model.bancoId;

    let valoresEsperados = [];
    this.valorEsperadoService.obterValoresEsperadosPorFiltros(filters).subscribe(res =>{
      for(let i = 0; i < res.length; i++){

        var element = res[i];
        var nameFormatado = `${element.descricao} valor: ${element.valor}`;
        valoresEsperados.push({ id: element.idValorEsperado, name: nameFormatado });
      }
      this.childEditarLayoutModal._options = valoresEsperados;
    });

    this.childEditarLayoutModal.openModal(model);
  }

  exclude(excludeModalId, model) {

    this.childExcluirLayoutModal.leioutes = new LayoutList();
    this.childExcluirLayoutModal.leioutes.layout = this.layouts;
    this.childExcluirLayoutModal.openModal(model);
  }

  detalhesValoresEsperados(model) {

    // this.childComponentModalDetalhesValorEsperado.valoresEsperados = model.valoresEsperados;
    // this.childComponentModalDetalhesValorEsperado.openModal();
  }

  concatenarValoresEsperados(valores: Array<ValorEsperado>) {

    if(!valores) return;
    valores.map(function(el){
      return el.descricao;
    }).join(",");
  }
}
