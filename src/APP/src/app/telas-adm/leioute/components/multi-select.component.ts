import { Input, Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import { IMultiSelectOption } from "angular-2-dropdown-multiselect";

@Component({
  selector: 'multi-select',
  template: `
    <ss-multiselect-dropdown [options]="valoresEsperados" style="display: inherit;width: 100%" [(ngModel)]="optionsModel"></ss-multiselect-dropdown>
    `,
})
export class MultiSelectComponent implements ViewCell, OnInit {

  value: string | number;
  rowData: any;

  optionsModel: number[];
  valoresEsperados: IMultiSelectOption[];

  ngOnInit(): void {
    this.obterValoresEsperados();
  } 

  obterValoresEsperados() {
    this.valoresEsperados = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
      { id: 3, name: 'Option 3' }
    ]
  }
}