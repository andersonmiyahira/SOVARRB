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
      email: 'anderson@gmail.com',
      senha: '123',
      ehAdministrador: 1
    },{
      nome: 'Teste',
      email: 'teste@gmail.com',
      senha: '123',
      ehAdministrador: 0
    }];

    const arquivosGetAll = [
      {
        id:1,
        nome: "REM01.txt",
        dataImportacao: "01/01/2018 18:00",
        tamanho: "20kb",
        tipo: "CNAB 240",
        banco: "Itaú",
        validado: "Sim"
      },
      {
        id: 2,
        nome: "REM02.txt",
        dataImportacao: "02/01/2018 18:00",
        tamanho: "20kb",
        tipo: "CNAB 240",
        banco: "Santander",
        validado: "Sim"
      },
      {
        id:3,
        nome: "REM03.txt",
        dataImportacao: "03/01/2018 15:00",
        tamanho: "220kb",
        tipo: "CNAB 400",
        banco: "Banco do Brasil",
        validado: "Sim"
      }

    ];

    const bancoGetAll = [


    ];

    const segmentoGetAll = [
      

    ];

    return {
      banco: banco,
      tipoCNAB: tipoCNAB,
      login: login,
      arquivosGetAll: arquivosGetAll,
      bancoGetAll: bancoGetAll,
      segmentoGetAll: segmentoGetAll
    };
  }
}
