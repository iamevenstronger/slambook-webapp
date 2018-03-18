import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }
   headers: any = new Headers({
    'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8'
    });
   request_option: any = new RequestOptions({ headers: this.headers});
  signUp(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'signup.php?' + params, this.request_option) ;
  }
}
