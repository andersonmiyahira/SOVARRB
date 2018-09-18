import { LayoutValorEsperado } from "./layout-valor-esperado";

export class ValorEsperado{
    idValorEsperado: number;
    descricao: string;
    valor: string;
    bancoId: number;
    tipoCNABId: number;
    tipoBoletoId: number;
    dataCadastro: Date;
    ativo: boolean;
    banco?: any;
    layoutValoresEsperados?: Array<LayoutValorEsperado>;
}