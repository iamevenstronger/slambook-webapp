import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputTextModule} from 'primeng/inputtext';
import {GrowlModule} from 'primeng/growl';
import {PasswordModule} from 'primeng/password';
import {TabViewModule} from 'primeng/tabview';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from './account.service';
import { RouterModule, Routes } from '@angular/router';
import { SlamPagesComponent } from './slam-pages/slam-pages.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StartPageComponent } from './start-page/start-page.component';
import { CookieService } from 'ngx-cookie-service';
import {CardModule} from 'primeng/card';

const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'slampages', component: SlamPagesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SlamPagesComponent,
    PageNotFoundComponent,
    StartPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    CardModule,
    BrowserModule,
    FormsModule,
    GrowlModule,
    BrowserAnimationsModule,
    KeyFilterModule,
    InputTextModule,
    PasswordModule,
    TabViewModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ AccountService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
