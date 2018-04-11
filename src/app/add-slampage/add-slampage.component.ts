import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-slampage',
  templateUrl: './add-slampage.component.html',
  styleUrls: ['./add-slampage.component.css']
})
export class AddSlampageComponent implements OnInit {

  constructor(private account: AccountService,
    private router: Router,
    private cookieService: CookieService) { }

    slamname: String = '';
    slamdescription: String = '';
    singleField: any = [];
    customfields: any = [];
    customfield: String = '';
    slamPages: any = [];
    msgs: any = [];
    fields: any = [];
    loading: Boolean = false;
    url = '';
    cookies: Object ;
    keys: Array<string>;

  ngOnInit() {
  }

  update() {
    this.cookies = this.cookieService.getAll();
    this.keys = Object.keys(this.cookies);
  }

  createSlamPage() {
    this.update();
    this.msgs = [];
    let cusfield = '{"customfields":';
    cusfield = cusfield + JSON.stringify(this.customfields) + '}';
    this.url = 'token=' + this.cookies['slam_token'] + '&uid=' + this.cookies['slam_uid'];
    this.url = this.url + '&slamname=' + this.slamname + '&slamdescription=' + this.slamdescription + '&content=' + cusfield;
    this.account.createSlamPage(this.url).subscribe((response) => {
      if (response.success) {
        this.msgs.push({ severity: 'success', summary: 'success', detail: response.message });
        this.router.navigate(['slampages']);
      } else {
        this.msgs.push({ severity: 'error', summary: response.error_in, detail: response.message });
        if(response.error_in == 'token') {
          this.router.navigate(['/']);
        }
      }
    });
  }

  addCustomField() {
    if(this.customfield) {
      this.customfields.push(this.customfield);
    }
    this.customfield = '';
  }

  removeField(i) {
    this.customfields.splice(i, 1);
    console.log(this.customfields + "work");
  }

  logout() {
    this.cookieService.delete('slam_uid');
    this.cookieService.delete('slam_token');
    this.router.navigate(['/']);
  }

}
