import { Component } from '@angular/core';
import { TokenService } from './shared/token.service';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  public user: any;
  constructor(private userService: UserService, private tokenService: TokenService) {
  }

  public userSync() {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  public getToken() {
    return this.tokenService.get();
  }


}
