import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MenuModel } from './models/modelMenu';
import { RequestAdmParametros, ResponseAdmParametros, RequestAdmPantallas,  Modelpantalla, RequestlogsGuardar, ResponselogsGuardar,  RequestloginLdap, ResponsetloginLdap } from './models/WSSergeneral.model';
import { WSSerGeneralService, } from './services/wsser-general.service';
import { Observable } from 'rxjs';
import { CoreService } from './services/core.service';
import { ModelSesion } from './models/modelSesion';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _modelSesion! : ModelSesion;
  _modelSesion$! : Observable<ModelSesion>;

  constructor( private coreService: CoreService) {
  }
  
  ngOnInit(): void {
    this._modelSesion$ = this.coreService.getSesion$();
    this._modelSesion$.subscribe( sesion => 
      this._modelSesion = sesion
      );
  }
}
