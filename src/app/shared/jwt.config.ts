import { Http, RequestOptions } from '@angular/http';
import { AuthConfig, AuthHttp } from 'angular2-jwt';

export function AuthHttpFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig(
    {
      noJwtError: true,
      tokenName: 'jwt',
      globalHeaders: [{ Accept: 'application/json' }],
    }
  ), http, options);
}
