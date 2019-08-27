import { Layout } from "app/telas-adm/leioute/models/layout";

export class LayoutList{
    layout: Array<Layout>;
    
    get header(): Array<Layout>{
        if(this.layout == null) return new Array<Layout>();

        return this.layout.filter(_ => _.tipoRegistroId == 1);
    }

    get detalhe(): Array<Layout>{
        if(this.layout == null) return new Array<Layout>();

        return this.layout.filter(_ => _.tipoRegistroId == 2);
    }

    get trailer(): Array<Layout>{
        if(this.layout == null) return new Array<Layout>();

        return this.layout.filter(_ => _.tipoRegistroId == 3);
    }
}