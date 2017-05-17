import { Injectable } from '@angular/core';
import { RequestOptionsArgs } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import { TokenService } from './token.service';

@Injectable()
export class ApiService {
  private count = 0;

  constructor(private authHttp: AuthHttp, private tokenService: TokenService) {
  }

  public getMayby(url: string, options?: RequestOptionsArgs): Observable<string> {
    // return this.authHttp.get(url, options)
    //   .catch(this.handleError)
    //   .map((data) => <T>data.json());


    return Observable.of(url).switchMap(result => {
      console.log('doRequest:', this.count + 1);
      if (this.count >= 3) {
        this.count = 0;
        return Observable.throw('This is an error!').delay(1000);
      } else {
        this.count++;
        return Observable.of(result + this.count).delay(1000);
      }
    });
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<string> {
    return this.tokenize<string>(() => {
      return this.getMayby(url);
    });
  }

  private tokenize<T>(request) {
    return this.tokenService.get()
      .combineLatest<string, any>(request())
      .retryWhen(errors => errors
        .do((error) => console.log('error:', error))
        .do(val => this.tokenService.request())
        .delayWhen(val => Observable.timer(500))
      )
      .map(([token, result]) => result);
  }

  private handleError(error: any) {
    return Observable.throw(error.json ? error.json() : error);
  };

}
