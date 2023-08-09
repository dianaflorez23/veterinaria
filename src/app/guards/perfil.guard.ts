import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreService } from '../services/core.service';

@Injectable({
  providedIn: 'root'
})


export class PerfilGuard implements CanActivate {

  constructor( private coreService: CoreService,
              ) {
  }


  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let sesion = this.coreService.getSesion();
    if(sesion.perfil.rutasAcceso.includes(state.url) ){
      return true;
    }else{
      return false
    }
      
    }

}


