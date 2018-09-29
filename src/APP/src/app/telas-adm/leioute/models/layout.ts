import { ValorEsperado } from "app/telas-adm/valor-esperado-banco/model/valor-esperado";

export class Layout{
    idLayout: number;
    bancoId: number;
    tipoCNABId: number;
    tipoRegsitroId: number;
    segmentoId: number;
    tipoBoletoId: number;
    posicaoDe:number;
    posicaoAte: number;
    desricao: string;
    tipoCampoId: number;
    tipoCampoDescricao: string;
    obrigatorio: boolean;
    valoresEsperados: Array<ValorEsperado>;
}