import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({ providedIn: 'root' })
@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log('AUthenticating guard');
    // const currentUser = localStorage.getItem('currentUser');
    // if (currentUser) {
    //   return true;
    // } else {
    //   this.router.navigate(['/public/login']);
    //   return false;
    // }
    return true;

  }
}
