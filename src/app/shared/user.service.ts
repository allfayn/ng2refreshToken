import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  public getUser() {
    return this.apiService.get('user');
  }

}
