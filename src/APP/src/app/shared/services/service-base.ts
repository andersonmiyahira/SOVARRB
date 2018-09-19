import { environment } from "environments/environment";

export class ServiceBase {
    urlAPI: string;

    constructor(resource: string) {
       this.urlAPI = this.obterUrlEndpoint(resource);
    }

    private obterUrlEndpoint(resource: string) {
        return `${environment.urlWebAPI}${resource}/`;
      }
}