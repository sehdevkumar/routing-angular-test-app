import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';



export interface CanDeactivateInterface{
   confirm():boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ConfirmationGuard implements CanDeactivate<CanDeactivateInterface>  {
  canDeactivate(
    component: CanDeactivateInterface,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.confirm();
  }
  
}
