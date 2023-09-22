import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterState, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { map, take } from "rxjs/operators";

// @Injectable({ providedIn: 'root' })
// export class AuthGuard implements CanActivateFn {
//     constructor(private authService: AuthService, private router: Router) { }

//     canActivate(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): boolean | UrlTree | Promise<boolean> | Promise<UrlTree> | Observable<boolean> | Observable<UrlTree> {
//         return this.authService.user.pipe(take(1), map(user => {
//             const isAuth = !!user

//             if (isAuth) {
//                 return true
//             }

//             return this.router.createUrlTree(['/auth'])
//         }))
//     }
// }

export const canActivateGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> => {
    const authService = inject(AuthService)
    const router = inject(Router)
    return authService.user.pipe(take(1), map(user => {
        const isAuth = !!user

        if (isAuth) {
            return true
        }

        return router.createUrlTree(['/auth'])
    }))
}