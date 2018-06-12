import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class EventosService {

  public static realizouLogin: EventEmitter<string> = new EventEmitter();
  public static abriuModalValorEsperado: EventEmitter<string> = new EventEmitter();
  public static abriuModalValorEsperadoEdit: EventEmitter<string> = new EventEmitter();

  constructor() { }

}
