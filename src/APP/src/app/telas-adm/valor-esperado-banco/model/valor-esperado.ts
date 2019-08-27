import { LayoutValorEsperado } from "./layout-valor-esperado";
import { Banco } from "../../banco/models/banco";

export class ValorEsperado{
    
    constructor() {
        
        this.banco = new Banco();
    }

    idValorEsperado: number;
    descricao: string;
    valor: string;
    bancoId: number;
    tipoCNABId: number;
    tipoBoletoId: number;
    dataCadastro: Date;
    ativo: boolean;
    banco?: Banco;
    cnabDescricao: string;
    tipoBoletoDescricao: string;
    layoutValoresEsperados?: Array<LayoutValorEsperado>;
}