import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { MenuModel } from './models/modelMenu';
import { RequestAdmParametros, ResponseAdmParametros, RequestAdmPantallas,  Modelpantalla, RequestlogsGuardar, ResponselogsGuardar,  RequestloginLdap, ResponsetloginLdap } from './models/WSSergeneral.model';
import { WSSerGeneralService, } from './services/wsser-general.service';
import { Observable } from 'rxjs';
import { CoreService } from './services/core.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    
  private coreService: CoreService
  ) {

  }
  

  userIsLogged(){
  return this.coreService.validarSession();
  }

}
