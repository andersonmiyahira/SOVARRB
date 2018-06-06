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
    }]

    return {
      banco: banco,
      tipoCNAB: tipoCNAB,
      login: login
    };
  }
}
