import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Authservice } from "./auth.service";
import { map, take, tap } from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
    constructor(private authService:  Authservice,private router:Router){}
    canActivate(
        route: ActivatedRouteSnapshot, 
        router: RouterStateSnapshot):
        boolean | Promise<boolean | UrlTree>| Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
            take(1),
            map(user => {
                const isAuth = !!user
                if (isAuth) {
                    return true;
                }
            return this.router.createUrlTree(['/auth']);
        }), 
        // tap (isAuth => {
        //     this.router.navigate(['/auth']);
            
        // })
        );

    }

    }
