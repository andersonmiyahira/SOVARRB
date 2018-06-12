import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const banco = [
      { id: 11, descricao: 'Itaú' },
      { id: 12, descricao: 'Santander' },
      { id: 13, descricao: 'Bradesco' }
    ];

    const tipoCNAB = [
      { id: 1, descricao: '240' },
      { id: 2, descricao: '400' }
    ];

    const login = [{
      nome: 'Anderson',
      email: 'adm@gmail.com',
      senha: '123',
      ehAdministrador: 1
    }, {
      nome: 'Teste',
      email: 'user@gmail.com',
      senha: '123',
      ehAdministrador: 0
    }];

    const arquivosGetAll = [
      {
        id: 1,
        nome: "REM01.txt",
        dataImportacao: "01/01/2018 18:00",
        tamanho: "20kb",
        tipo: "CNAB 240",
        tipoArquivo: "Remessa",
        banco: "Itaú",
        validado: "Sim"
      },
      {
        id: 2,
        nome: "REM02.txt",
        dataImportacao: "02/01/2018 18:00",
        tamanho: "20kb",
        tipo: "CNAB 240",
        tipoArquivo: "Remessa",
        banco: "Santander",
        validado: "Sim"
      },
      {
        id: 3,
        nome: "REM03.txt",
        dataImportacao: "03/01/2018 15:00",
        tamanho: "220kb",
        tipo: "CNAB 400",
        tipoArquivo: "Retorno bancário",
        banco: "Banco do Brasil",
        validado: "Sim"
      }

    ];

    const bancoGetAll = [
      {
        id: 1,
        descricao: "Itaú",
        dataCadastro: "01/01/2018 18:00",
        status: "Ativo"
      },
      {
        id: 2,
        descricao: "Santander",
        dataCadastro: "03/01/2018 15:00",
        status: "Ativo"
      },
      {
        id: 3,
        descricao: "Banco do Brasil",
        dataCadastro: "03/01/2018 15:00",
        status: "Ativo"
      }
    ];

    const valorEsperadoGetAll = [
      {
        id: 1,
        descricao: "option1",
        valor: "02",
        cnab:"240",
        tipoArquivo:"Remessa",
        dataCadastro: "01/01/2018 18:00",
        status: "Ativo",
        banco: "Santander"
      },
      {
        id: 2,
        descricao: "option2",
        valor: "03",
        cnab:"240",
        tipoArquivo:"Remessa",
        dataCadastro: "03/01/2018 15:00",
        status: "Ativo",
        banco: "Itaú"
      },
      {
        id: 3,
        descricao: "ooption3",
        valor: "04",
        cnab:"400",
        tipoArquivo:"Retorno",
        dataCadastro: "03/01/2018 15:00",
        status: "Ativo",
        banco: "Itaú"
      }
    ];

    const segmentoGetAll = [
      {
        id: 1,
        descricao: "Segmento Q",
        dataCadastro: "01/01/2018 18:00",
        status: "Ativo"
      },
      {
        id: 2,
        descricao: "Segmento R",
        dataCadastro: "03/01/2018 15:00",
        status: "Ativo"
      },
      {
        id: 3,
        descricao: "Segmento S",
        dataCadastro: "03/01/2018 15:00",
        status: "Ativo"
      }
    ];

    const resultadoValidacao = [
      { tipo: 1, mensagem: "Linha 1, Posição 10 - Posição 20 : Esperado Valor Numérico, campo: CNPJ", ehValido: false },
      { tipo: 2, mensagem: "Linha 2, Posição 10 - Posição 15 : Formato de Data Incorreto", ehValido: false },
      { tipo: 2, mensagem: "Linha 3, Posição 15 - Posição 30: Esperado Valor Numérico", ehValido: false },
      { tipo: 2, mensagem: "Linha 3, Posição 30 - Posição 35: Esperado Valor Numérico", ehValido: false },
      { tipo: 2, mensagem: "Linha 3, Posição 30 - Posição 38: Esperado Valor Numérico", ehValido: true },
      { tipo: 2, mensagem: "Linha 4, Posição 38 - Posição 45: Formato de Data Correto", ehValido: true },
      { tipo: 2, mensagem: "Linha 5, Posição 45 - Posição 50: Formato de Data Correto", ehValido: true },
      { tipo: 3, mensagem: "Linha 6, Posição 10 - Posição 20: Esperado Valor Numérico", ehValido: false }
    ];

    const leioutes = [
      { tipo: 1, posicaoDe: 0, posicaoAte: 10, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 1, posicaoDe: 20, posicaoAte: 30, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 1, posicaoDe: 30, posicaoAte: 40, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 2, posicaoDe: 0, posicaoAte: 10, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 2, posicaoDe: 20, posicaoAte: 30, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 2, posicaoDe: 30, posicaoAte: 40, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 3, posicaoDe: 0, posicaoAte: 10, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 3, posicaoDe: 20, posicaoAte: 30, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"},
      { tipo: 3, posicaoDe: 30, posicaoAte: 40, descricao:"Caixa de texto", tipoCampo: "Alfanumérico", obrigatorio: "Sim"}     

    ]

    return {
      banco: banco,
      tipoCNAB: tipoCNAB,
      login: login,
      arquivosGetAll: arquivosGetAll,
      bancoGetAll: bancoGetAll,
      segmentoGetAll: segmentoGetAll,
      resultadoValidacao: resultadoValidacao,
      leioutes: leioutes,
      valorEsperadoGetAll: valorEsperadoGetAll
    };
  }
}
