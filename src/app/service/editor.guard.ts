import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorGuard implements CanActivate {
  constructor(
    private router: Router,

  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('type') === 'editor') {
      console.log('editor');

      return true;
    } else {
      if (localStorage.getItem('type') === 'admin') {
        this.router.navigate(['/admin']);
      } else {

        this.router.navigate(['/login']);
      }
    }

  }
}
