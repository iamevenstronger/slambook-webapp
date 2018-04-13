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
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {EditorModule} from 'primeng/editor';
import {SidebarModule} from 'primeng/sidebar';
import {DataTableModule} from 'primeng/datatable';
import { CookieService } from 'ng2-cookies';
import { AddSlampageComponent } from './add-slampage/add-slampage.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { ClipboardModule } from 'ngx-clipboard';
import { ViewSlamwritesComponent } from './view-slamwrites/view-slamwrites.component';
const appRoutes: Routes = [
  { path: '', component: StartPageComponent },
  { path: 'slampages', component: SlamPagesComponent },
  { path: 'addslampage', component: AddSlampageComponent },
  { path: 'addslampage/:data', component: AddSlampageComponent },
  { path: 'viewslamwrites/:spid', component: ViewSlamwritesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SlamPagesComponent,
    PageNotFoundComponent,
    StartPageComponent,
    AddSlampageComponent,
    ViewSlamwritesComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    DataTableModule,
    ConfirmDialogModule,
    ClipboardModule,
    SidebarModule,
    EditorModule,
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
    RouterModule,
    DialogModule
  ],
  providers: [ AccountService, CookieService ,ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
