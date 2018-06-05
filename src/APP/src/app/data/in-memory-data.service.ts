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


    return {
      banco: banco,
      tipoCNAB: tipoCNAB
    };
  }
}
