import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { LeiouteService } from '../leioute.service';
import { Ng2SmartTableModule, ViewCell, LocalDataSource } from 'ng2-smart-table';
import { ImportarArquivoService } from '../../../importar-arquivo/importar-arquivo.service';

@Component({
  selector: 'app-leioute-cadastrar',
  templateUrl: './leioute-cadastrar.component.html',
  styleUrls: ['./leioute-cadastrar.component.css']
})
export class LeiouteCadastrarComponent implements OnInit {
  bancos: any;
  cnabs: any;

  settings: any;
  data: LocalDataSource;

  constructor(private leiouteService: LeiouteService, 
              private importarArquivoService: ImportarArquivoService) {
  }

  obterBancos() {
    this.importarArquivoService.obterBancos().subscribe(response => {
      this.bancos = response;
    });
  }

  obterCNAB() {
    this.importarArquivoService.obterTipoCNAB().subscribe(response => {
      this.cnabs = response;
    });
  }

  ngOnInit() {
    this.initSettings();
    this.obterBancos();
    this.obterCNAB();
  }

  initSettings() {
    this.settings = {
      actions: {
        add: false
      },
      edit: {
        inputClass: '',
        editButtonContent: 'Alterar',
        saveButtonContent: 'Salvar',
        cancelButtonContent: 'Cancelar',
        confirmSave: false,
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
            switch(row.tipoCampo){
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
          title: 'Valor Esperado', filter: false, type: 'html', 
          editor: {
            type: 'custom',
            renderComponent: ButtonViewComponent
          }
        }
      }
    };

    this.data = new LocalDataSource(); 
  }


  salvarNovoLeioute(){
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

  selecionarValorEsperado(){
    alert(1)
  }
}



@Component({
  selector: 'button-view',
  template: `
    <button (click)="onClick()">{{ renderValue }}</button>
  `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() save: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    this.renderValue = this.value.toString().toUpperCase();
  }

  onClick() {
    this.save.emit(this.rowData);
  }
}