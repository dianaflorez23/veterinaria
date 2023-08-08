import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, pipe, throwError } from 'rxjs';

@Injectable()
export class InterceptorMascotasInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
    let prueba 
      catchError((error: HttpErrorResponse) => {

        if (error.status === 401)
          return throwError('No posee permisos suficientes.');
        else if (error.status === 403)
          return throwError('Acceso prohibido.');
        else if (error.status === 404)
          return throwError('Registro no encontrado.');
        else
          return throwError('Ha ocurrido un error inesperado.');

      },
    );
  
  

  }

}
