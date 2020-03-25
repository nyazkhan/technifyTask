import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(
    private router: Router,

  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    console.log('sssssssssssits');

    if (localStorage.getItem('type') === 'editor') {
      console.log('its');

      this.router.navigate(['/editor']);
    } else {
      if (localStorage.getItem('type') === 'admin') {
        this.router.navigate(['/admin']);
      } else {
        return true;

      }
    }

  }

}
