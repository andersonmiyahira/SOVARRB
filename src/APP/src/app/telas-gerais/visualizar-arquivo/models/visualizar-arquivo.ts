import { Banco } from "../../../telas-adm/banco/models/banco";

export class VisualizarArquivo {
    idArquivo: number;
    usuarioId: number;
    bancoId: number;
    banco: Banco;
    nomeArquivoOriginal: string;
    nomeArquivoGerado: string;
    tipoCNABId: number;
    tipoBoletoId: number;
    ehValido: boolean;
    dataCadastro: Date;
    dataAlteracao?: Date;

    usuarioDescricao: string;
    tipoCNABDescricao: string;
    tipoBoletoDescricao: string;

    //filter properties
    de: Date;
    ate: Date;
}