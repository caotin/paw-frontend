import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            setHeaders: {
                'Content-Type': 'application/json',
                'Authorization': ''
            }
        });

        if (this.getToken()) {
            request = request.clone({
                setHeaders: {
                    'Authorization': this.getToken()
                }
            });
        }
        return next.handle(request);
    }

    getToken(): string {
        if (localStorage.getItem('access_token')) {
            return localStorage.getItem('access_token');
        }

        return null;
    }
}