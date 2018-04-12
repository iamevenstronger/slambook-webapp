import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class AccountService {

  constructor(private http: HttpClient) { }

  signUp(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'signup.php?' + params) ;
  }

  login(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'login.php?' + params) ;
  }

  listSlamPages(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'listslampages.php?' + params) ;
  }

  createSlamPage(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'createslampage.php?' + params) ;
  }

  deleteSlamPage(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'deleteslampage.php?' + params) ;   
  }

  updateSlamPage(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'updateslampage.php?' + params);
  }

  listSlamWrites(params: String): Observable<any> {
    return this.http.get(environment.apiUrl + 'listslamwrites.php?' + params) ;
  }

}
