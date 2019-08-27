import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { NotificationsService } from 'angular2-notifications';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
              private notification: NotificationsService) { }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
      .catch(error => {

        this.showErrors(error);
        return Observable.throw(error);
      });
  }

  postWithHttpOptions(url: string, data: any, httpHeaders: any): Observable<any> {
    return this.http.post(url, data, httpHeaders)
      .catch(error => {
       
        this.showErrors(error);
        return Observable.throw(error);
      });
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data)
      .catch(error => {

        this.showErrors(error);
        return Observable.throw(error);
      });
  }

  delete(url: string, id: number): Observable<any> {

    let resource = `${url}?id=${id}`;

    return this.http.delete(resource)
      .catch(error => {

        this.showErrors(error);
        return Observable.throw(error);
      });
  }
  get(url: string): Observable<any> {
    return this.http.get(url)
      .catch(error => {
       
        this.showErrors(error);
        return Observable.throw(error);
      });
  }
  getByFilters(url: string, filter: any): Observable<any> {
    let params = this.makeSearchParams(filter);

    return this.http.get(url + "?" + params.toString())
      .catch(error => {
        
        this.showErrors(error);
        return Observable.throw(error);
      });
  }

  private makeSearchParams(filters?: any): URLSearchParams {
    const params = new URLSearchParams();
    if (filters != null) {
      for (const key in filters) {
        if (filters.hasOwnProperty(key) && filters[key]) {
          params.set(key, filters[key]);
        }
      }
    }
    return params;
  }

  private showErrors(httpError: any) {

    httpError.error.errors.forEach(errosMsg => {
      this.notification.error('Erro', errosMsg,
        { timeOut: 3000, showProgressBar: true, pauseOnHover: true, clickToClose: true });
    });
  }
}
