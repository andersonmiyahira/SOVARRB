import { HttpClient } from '@angular/common/http';
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
        console.log('erros',error)
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

    let resource = `${url}${id}`;
    
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
}
