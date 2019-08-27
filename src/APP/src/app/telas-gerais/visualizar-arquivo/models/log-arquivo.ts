export class LogArquivoResponse {
    idArquivo: number;
    nomeArquivo: string;
    resultado: Array<LogArquivo>; 

    headerSucesso: Array<LogArquivo>; 
    headerErro: Array<LogArquivo>;
    detalheSucesso: Array<LogArquivo>;
    detalheErro: Array<LogArquivo>;
    trailerSucesso: Array<LogArquivo>
    trailerErro: Array<LogArquivo>;    
}

export class LogArquivo {
   tipo: number;
   mensagem: string;
   ehValido: boolean;
}

export class ResultadoProcessadoResponse {
    resultado: Array<LogArquivo>;

    get headerSucesso(): Array<LogArquivo>{
        if(this.resultado == null) return new Array<LogArquivo>();
        
        return this.resultado.filter(_ => _.tipo == 1 && _.ehValido);
    }

    get headerErro(): Array<LogArquivo>{
        if(this.resultado == null) return new Array<LogArquivo>();
        
        return this.resultado.filter(_ => _.tipo == 1 && !_.ehValido);
    }

    get detalheSucesso(): Array<LogArquivo>{
        if(this.resultado == null) return new Array<LogArquivo>();
        
        return this.resultado.filter(_ => _.tipo == 2 && _.ehValido);
    }

    get detalheErro(): Array<LogArquivo>{
        if(this.resultado == null) return new Array<LogArquivo>();
        
        return this.resultado.filter(_ => _.tipo == 2 && !_.ehValido);
    }

    get trailerSucesso(): Array<LogArquivo>{
        if(this.resultado == null) return new Array<LogArquivo>();
        
        return this.resultado.filter(_ => _.tipo == 3 && _.ehValido);
    }

    get trailerErro(): Array<LogArquivo>{
        if(this.resultado == null) return new Array<LogArquivo>();
        
        return this.resultado.filter(_ => _.tipo == 3 && !_.ehValido);
    }
}