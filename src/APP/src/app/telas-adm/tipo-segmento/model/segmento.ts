import { Banco } from "../../banco/models/banco";

export class Segmento {
    constructor() {
        this.banco = new Banco();
    }

    idSegmento: number;
    descricao: string;
    banco: Banco;
    dataCadastro: Date;
    ativo: boolean;
}
