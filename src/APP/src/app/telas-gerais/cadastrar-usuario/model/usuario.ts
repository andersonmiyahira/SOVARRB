export class Usuario {
    idUsuario: number;
    nome: string;
    email: string;
    senha: string;
    confirmaSenha: string;
    ehAdministrador: boolean;
    dataCadastro: Date;
    dataAlteracao: Date;
    ativo: boolean;
}