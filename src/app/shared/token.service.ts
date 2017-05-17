import { Injectable } from '@angular/core';
import { UUID } from 'angular2-uuid';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenService {

  private token: BehaviorSubject<string> = new BehaviorSubject(null);
  private processing = false;

  constructor() {
    this.token.subscribe(token => token ? localStorage.setItem('jwt', token) : localStorage.removeItem('jwt'));
    if (localStorage.getItem('jwt')) {
      this.token.next(localStorage.getItem('jwt'));
    }
  }

  public get() {
    if (!this.token.getValue()) {
      this.request();
    }
    return this.token.asObservable().skipWhile(token => !token);
  }

  public delete() {
    this.token.next(null);
  }

  private save(token: string) {
    this.token.next(token);
    this.processing = false;
  }

  public request() {
    this.delete();
    if (!this.processing) {
      Observable.of(UUID.UUID()).do(token => console.log('Request new token')).delay(5000).subscribe(token => this.save(token));
      this.processing = true;
    }
  }


}
