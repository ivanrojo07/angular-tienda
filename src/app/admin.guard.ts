import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './core/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.hasUser().pipe(
      map(user=> user === null ? false : true),
      tap(user=>{
        if(!user){
          this.router.navigateByUrl('auth')
        }
      }),
    )
    // return false;
  }

  constructor(private authService: AuthService, private router: Router){

  }
  
}
