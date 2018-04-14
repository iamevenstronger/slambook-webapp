import { Component, OnInit } from '@angular/core';
import { AccountService } from './../account.service';
import { CookieService } from 'ng2-cookies';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private account: AccountService,
              private router: Router,
              private cookieService: CookieService) { }
  username: String = '';
  password: String = '' ;
  loginUsername: String = '' ;
  loginPassword: String = '' ;
  email: String = '' ;
  msgs: any = [] ;
  url: String = '' ;
  display: Boolean = false ;
  terms: boolean = false ;
  ngOnInit() {
  }

  signUpUser() {
    
    this.msgs = [] ;
    this.url = 'username=' + this.username + '&password=' + this.password + '&email=' + this.email + '&terms=' + this.terms;
    this.account.signUp(this.url).subscribe((response) => {
        if ( response.success ) {
          this.msgs.push({severity: 'success', summary: 'success', detail: response.message });
          this.cookieService.set( 'slam_token', response.token, 365 );
          this.cookieService.set( 'slam_uid', response.uid, 365 );
          this.closeDialog();
          this.router.navigate(['slampages']);
        } else {
          this.msgs.push({severity: 'error', summary: response.error_in, detail: response.message });
        }
    });
  }

  loginUser() {
    this.msgs = [] ;
    this.url = 'username=' + this.loginUsername + '&password=' + this.loginPassword ;
    this.account.login(this.url).subscribe((response) => {
      if ( response.success ) {
        this.msgs.push({severity: 'success', summary: 'success', detail: response.message });
        this.cookieService.set( 'slam_token', response.token, 365 );
        this.cookieService.set( 'slam_uid', response.uid, 365 );
        this.closeDialog();
        this.router.navigate(['slampages']);
      } else {
        this.msgs.push({severity: 'error', summary: response.error_in, detail: response.message });
      }
    });
  }

  showDialog() {
    this.display = true;
  }

  closeDialog() {
    this.display = false ;
  }
}
