import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import { AuthenticationError } from '../../shared/errors/authentication.error';
export const authenticationErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> => {
  const authenticationService = inject(AuthenticationService);

  return next(req).pipe(catchError(err => {
    if([401, 403].includes(err.status) && authenticationService.userValue){
      authenticationService.logout();
    }

    if(err.status === 401 && err.error.message === 'Invalid credentials.'){
      return throwError(() => new AuthenticationError(err.error.message))
    }

    return throwError(() => err.error|| err.statusText)
  }));
};
