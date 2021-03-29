import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      setHeaders: { Authorization: `Bearer ${environment.fakeToken}` },
    });
    console.log('AppInterceptor added Bearer Token for request', cloned);
    console.log('Token: ', environment.fakeToken);
    return next.handle(cloned);
  }
}
