import { Component } from '@angular/core';
import { AccountService } from './account.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private account: AccountService) { }
  username: String ;
  password: String ;
  email: String ;
  msgs: any ;
  url: String ;
  signUpUser() {
    this.url = 'username=' + this.username + '&password=' + this.password + '&email=' + this.email;
    this.account.signUp(this.url).subscribe((response) => {
        console.log(response);
    });
  }
}
