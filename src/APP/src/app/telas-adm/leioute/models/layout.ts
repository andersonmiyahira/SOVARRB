import { ValorEsperado } from "app/telas-adm/valor-esperado-banco/model/valor-esperado";

export class Layout{
    idLayout: number;
    bancoId: number;
    tipoCNABId: number;
    tipoRegistroId: number;
    segmentoId: number;
    tipoBoletoId: number;
    posicaoDe:number;
    posicaoAte: number;
    descricao: string;
    tipoCampoId: number;
    tipoTransacaoId: number;
    tipoCampoDescricao: string;
    obrigatorio: boolean;
    valoresEsperados: Array<ValorEsperado>;
    idValoresEsperados: Array<number>;
    tipoRegistroFlag?: boolean;

    idLayoutReference: string;

    valoresEsperadosSelecionados: string;
}