import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreService } from '../services/core.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanActivate {
  constructor( private coreService: CoreService) {
  }


  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let modelSesion = this.coreService.getSesion();
    if(modelSesion &&  modelSesion.nombreUsuario != null && modelSesion.nombreUsuario !="" ) {
      return true;
    }  
      return false;
    }

}


