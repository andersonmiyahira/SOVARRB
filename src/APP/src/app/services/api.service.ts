import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';
//import { NotificationToastrService } from '../util/notification/services/notification-toastr.service';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient,
    //private notificationToastr: NotificationToastrService
  ) {
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data)
      .catch(error => {
        //this.notificationToastr.error(error);
        console.log('erros', error)
        return Observable.throw(error);
      });
  }

  postWithHttpOptions(url: string, data: any, httpHeaders: any): Observable<any> {
    return this.http.post(url, data, httpHeaders)
      .catch(error => {
        //this.notificationToastr.error(error);
        console.log('erros', error)
        return Observable.throw(error);
      });
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data)
      .catch(error => {

        //this.notificationToastr.error(error);

        let errorMessage: string;
        if (error instanceof Response) {
          errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        }
        else {
          errorMessage = error.toString();
        }

        console.log('===== ERROR HANDLER - PUT');
        console.log(errorMessage);
        return Observable.throw(errorMessage);
      });
  }

  delete(url: string, id: number): Observable<any> {

    let resource = `${url}?id=${id}`;

    return this.http.delete(resource)
      .catch(error => {

        //this.notificationToastr.error(error);

        let errorMessage: string;
        if (error instanceof Response) {
          errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`;
        }
        else {
          errorMessage = error.toString();
        }

        console.log('===== ERROR HANDLER - DELETE');
        console.log(errorMessage);
        return Observable.throw(errorMessage);
      });
  }
  get(url: string): Observable<any> {
    return this.http.get(url)
      .catch(error => {
        //this.notificationToastr.error(error);
        return Observable.throw(error);
      });
  }
  getByFilters(url: string, filter: any): Observable<any> {
    let params = this.makeSearchParams(filter);

    return this.http.get(url + "?" + params.toString())
      .catch(error => {
        //this.notificationToastr.error(error);
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
}
