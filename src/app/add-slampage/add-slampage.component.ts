import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-add-slampage',
  templateUrl: './add-slampage.component.html',
  styleUrls: ['./add-slampage.component.css']
})
export class AddSlampageComponent implements OnInit {

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
  spid = '';
  uid = '';
  cookies: Object;
  keys: Array<string>;
  isEdit: boolean = false;

  constructor(private account: AccountService,
    public router: Router,
    private cookieService: CookieService,
    private route: ActivatedRoute) {
    this.route.params.subscribe((response: any) => {
      if (Object.keys(response).length != 0) {
        this.slamname = response.slamname;
        this.slamdescription = response.slamdescription;
        this.customfields = JSON.parse(response.content).customfields;
        this.spid = response.spid;
        this.uid = response.uid;
        this.isEdit = true;
      }
    });
  }

  ngOnInit() {
    this.update();
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
      } else {
        this.msgs.push({ severity: 'error', summary: response.error_in, detail: response.message });
        if (response.error_in == 'token') {
          this.router.navigate(['/']);
        }
      }
    });
  }

  editSlamPage() {
    this.update();
    this.msgs = [];
    let cusfield = '{"customfields":';
    cusfield = cusfield + JSON.stringify(this.customfields) + '}';
    this.url = 'token=' + this.cookies['slam_token'] + '&uid=' + this.uid + '&spid=' + this.spid;
    this.url = this.url + '&slamdescription=' + this.slamdescription + '&content=' + cusfield;
    this.account.updateSlamPage(this.url).subscribe((response) => {
      if (response.success) {
        this.msgs.push({ severity: 'success', summary: 'success', detail: response.message });
      } else {
        this.msgs.push({ severity: 'error', summary: response.error_in, detail: response.message });
        if (response.error_in == 'token') {
          this.router.navigate(['/']);
        }
      }
    });
  }

  addCustomField() {
    if (this.customfield) {
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
