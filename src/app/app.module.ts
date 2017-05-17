import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Http, RequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/combineLatest';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/delayWhen';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/takeWhile';
import { AppComponent } from './app.component';
import { ApiService } from './shared/api.service';
import { AuthHttpFactory } from './shared/jwt.config';
import { TokenService } from './shared/token.service';
import { UserService } from './shared/user.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TokenService, ApiService, UserService, {
    provide: AuthHttp,
    deps: [Http, RequestOptions],
    useFactory: AuthHttpFactory
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
