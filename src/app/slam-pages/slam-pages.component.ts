import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slam-pages',
  templateUrl: './slam-pages.component.html',
  styleUrls: ['./slam-pages.component.css']
})
export class SlamPagesComponent implements OnInit {

  constructor(private account: AccountService,
    private router: Router,
    private cookieService: CookieService) { }
  visibleSidebar: Boolean = false;
  nocontent: Boolean = false;
  slamwritedisplay: Boolean = false;
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
    this.listSlamPage();
  }

  update() {
    this.cookies = this.cookieService.getAll();
    this.keys = Object.keys(this.cookies);
  }

  listSlamPage() {
    this.update();
    this.url = 'token=' + this.cookies['slam_token'] + '&uid=' + this.cookies['slam_uid'];
    this.account.listSlamPages(this.url).subscribe((response) => {
      if (response.success) {
        if (!response.data.length) {
          this.nocontent = true;
        }
        this.slamPages = response.data;
        this.slamPages.forEach(element => {
       element.link = 'http://www.slambook.ml/slamwrite.html?username=' + response.username + '&slamname=' + element.slamname ;        });
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  listSlamWrites(spid) {
    this.showVisibleSidebar();
    this.loading = true;
    this.url = 'token=' + this.cookies['slam_token'] + '&spid=' + spid;
    this.account.listSlamWrites(this.url).subscribe((response) => {
      this.fields = response.data;
    });
    this.loading = false;
  }

  viewFullContent(content) {
    this.singleField = [] ;
    const contents = content.content ;
    this.slamwritedisplay = true;
    let k = '';
    for (k in contents) {
      if (contents.hasOwnProperty(k) && k !== 'customfields') {
        this.singleField.push({ key: k, value: contents[k] });
      }
    }
    const cusfield = contents.customfields ;
    for (k in cusfield) {
      if (cusfield.hasOwnProperty(k)) {
        this.singleField.push({ key: k, value: cusfield[k] });
      }
    }
  }

  showVisibleSidebar() {
    this.visibleSidebar = true;
  }

  closeVisibleSidebar() {
    this.visibleSidebar = false;
  }

  logout() {
    this.cookieService.delete('slam_uid');
    this.cookieService.delete('slam_token');
    this.router.navigate(['/']);
  }
}
