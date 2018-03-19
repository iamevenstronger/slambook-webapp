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
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    GrowlModule,
    BrowserAnimationsModule,
    KeyFilterModule,
    InputTextModule,
    PasswordModule,
    TabViewModule,
    HttpClientModule
  ],
  providers: [ AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
