import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import { RequestAdmPantallas, RequestAdmParametros,RequestlogsGuardar, RequestloginLdap, ResponsetloginLdap } from '../models/WSSergeneral.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WSSerGeneralService {

  

  constructor(
    private http: HttpClient 
  ) { }

  consultarPropiedadesApps(req:RequestAdmParametros){
    return this.http.post('http://172.24.42.253:8100//WSSerGeneral/propiedades/admParametrosEAF'      
                     , req);
  }
  
  consultarPropiedades(req:RequestAdmPantallas){
    let parametros = new HttpParams ();
    parametros = parametros.append ("UUID", 56 );
    return this.http.post('http://172.24.232.14:8100/WSSerGeneral/pantallas/admPantallasEAF'
                      , req ,{params:parametros})
  }

  validacionLdap(user:string, pass:string){
    return this.http.get<boolean>('http://172.24.232.14:8100/WSSerGeneral/login/LDAP?pass='+ pass +'&user='+ user);
  }


  guardarLogsRest(req:RequestlogsGuardar){
    return this.http.post('http://172.24.232.14:8100/WSSerGeneral/logs/guardar?UUID=32&Accion=c'      
    , req);

  }



   
}
 