import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler, HttpEvent, HttpParams } from '@angular/common/http';
import { Authservice } from './auth.service';
import { take,exhaustMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService: Authservice) {}

    
    intercept(req: HttpRequest<any>,next :HttpHandler){
        // this.authService.user.subscribe();
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if (!user) {
                    return next.handle(req);
                }
                const modifiedReq = req.clone({
                
                    params: new HttpParams().set('auth',user.token || '')
                });
                return next.handle(modifiedReq);

            })
        );
    }
}                                           