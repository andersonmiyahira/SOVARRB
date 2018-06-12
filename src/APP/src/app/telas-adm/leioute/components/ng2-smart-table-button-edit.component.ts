import { Input, Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import { EventosService } from "../../../core/eventos.service";

@Component({
  selector: 'button-edit',
  template: `
    <button type="button" class="btn btn-primary" (click)="onClick()">
        <span class="glyphicon glyphicon-trash"></span>Selecione
      </button>
    `,
})
export class ButtonEditComponent implements ViewCell, OnInit {
  
  @Input() value: string | number;
  @Input() rowData: any; 
  
  ngOnInit(): void {
  }

  onClick() {
    EventosService.abriuModalValorEsperadoEdit.emit(this.rowData);
  }
}