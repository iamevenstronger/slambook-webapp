import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-slamwrites',
  templateUrl: './view-slamwrites.component.html',
  styleUrls: ['./view-slamwrites.component.css']
})
export class ViewSlamwritesComponent implements OnInit {

  constructor(private account: AccountService,
    private router: Router,
    private cookieService: CookieService,
    private confirmationService: ConfirmationService,
    private route: ActivatedRoute) { }

    fields: any ;
    loading: boolean = false ;
    url: string = '';
    cookies: Object ;
    keys: any ;
    singleField: any = [];
    slamwritedisplay: boolean = false ;

  ngOnInit() {
    this.update();
    this.route.params.subscribe((response: any) => {
    this.loading = true;
    this.url = 'token=' + this.cookies['slam_token'] + '&spid=' + response.spid;
    this.account.listSlamWrites(this.url).subscribe((response) => {
      this.fields = response.data;
      this.loading = false;
    });
  });
  }

  update() {
    this.cookies = this.cookieService.getAll();
    this.keys = Object.keys(this.cookies);
  }

  navBack() {
    this.router.navigate(['slampages']);
  }
  
  viewFullContent(content) {
    this.singleField = [];
    const contents = content.content;
    this.slamwritedisplay = true;
    let k = '';
    for (k in contents) {
      if (contents.hasOwnProperty(k) && k !== 'customfields') {
        contents[k] = (contents[k]) ? contents[k] : 'empty' ;
        this.singleField.push({ key: k, value: contents[k] });
      }
    }
    const cusfield = contents.customfields;
    for (k in cusfield) {
      if (cusfield.hasOwnProperty(k)) {
        cusfield[k] = (cusfield[k]) ? cusfield[k] : 'empty' ;
        this.singleField.push({ key: k, value: cusfield[k] });
      }
    }
  }
}
