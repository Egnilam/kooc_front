import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
export const jwtInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authenticationService = inject(AuthenticationService);

  if (!req.url.includes('/api/v1/login') && authenticationService.isLogged()) {
    const clone = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authenticationService.getToken()}`
      }
    });

    return next(clone);
  }

  return next(req);
};
