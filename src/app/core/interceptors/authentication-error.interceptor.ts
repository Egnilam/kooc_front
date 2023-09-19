import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
export const authenticationErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authenticationService = inject(AuthenticationService);

  return next(req).pipe(catchError(err => {
    if([401, 403].includes(err.status) && authenticationService.isLogged()){
      authenticationService.logout();
    }
    const error = (err | err.error | err.error.message) || err.statusText;

    return throwError(() => error)
  }));
};
