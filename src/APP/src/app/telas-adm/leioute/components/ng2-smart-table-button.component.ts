import { Input, Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ViewCell } from "ng2-smart-table";
import { EventosService } from "../../../core/eventos.service";

@Component({
  selector: 'button-view',
  template: `
    <button type="button" class="btn btn-primary btn-sm" style="color:#fff;" (click)="onClick()">
    <i class="fas fa-info-circle"></i> Detalhes
      </button>
    `,
})
export class ButtonViewComponent implements ViewCell, OnInit {
  
  @Input() value: string | number;
  @Input() rowData: any; 
  
  ngOnInit(): void {
  }

  onClick() {
    EventosService.abriuModalValorEsperado.emit(this.rowData);
  }
}