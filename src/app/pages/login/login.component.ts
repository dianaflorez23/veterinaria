import { Component, Optional } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { MenuModel } from 'src/app/models/modelMenu';
import { colaboradorModel, } from 'src/app/models/modelColaborador';
import { RequestlogsGuardar } from 'src/app/models/WSSergeneral.model';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';
import { CoreService } from 'src/app/services/core.service';
import { clienteModel } from 'src/app/models/modelCiente';
import { Constantes } from '../shared/Constantes';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  //Formulario

  formDatoslogin: FormGroup = new FormGroup({});

  constructor(
    private fb: UntypedFormBuilder
    , private WSserGeneral: WSSerGeneralService
    , private router: Router
    , private coreService: CoreService) {

  }

  ngOnInit(): void {


    this.constructorFormularioLogin();


  }

  constructorFormularioLogin() {
    this.formDatoslogin = this.fb.group({
      usuariored: ["", [Validators.required]],
      password: ["", [Validators.required]],
      perfil: ["", [Validators.required]],
    })
  }

  validarLogin() {
     debugger
    if (this.formDatoslogin.invalid) { return }
    switch (this.formDatoslogin.value.perfil) {
      case Constantes.CONST_COD_PERFIL_CLIENTE:
        if (this.coreService.loginCliente(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.password)) {
          this.coreService.llenarSession(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.perfil);
          this.router.navigate(['actualizarProducto']);
          return;
        }
        break;
      case Constantes.CONST_COD_PERFIL_ADM:
        // debugger
        if (this.coreService.validarColaborador(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.perfil )) {
          this.validacionLdap(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.password);

        // return;
        }
        break;


      case Constantes.CONST_COD_PERFIL_VENDENDOR:
        
        if (this.coreService.validarColaborador(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.perfil)) {
          this.validacionLdap(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.password);
          return;
        }
        break;
        default: { alert("credenciales incorrectas"); }
    }
    // alert("credenciales incorrectas"); 
   
}

validacionLdap(usuario: string, password: string,) {

  this.WSserGeneral.validacionLdap(usuario, password).subscribe((resp: any) => {
    debugger;
    if (resp == true) {
      this.coreService.llenarSession(this.formDatoslogin.value.usuariored, this.formDatoslogin.value.perfil);
      switch (this.formDatoslogin.value.perfil) {
        case Constantes.CONST_COD_PERFIL_ADM: {
          debugger;
          this.router.navigate(['producto/nuevo']); 
        }
          break;
        
        case Constantes.CONST_COD_PERFIL_VENDENDOR: {
          debugger;
          this.router.navigate(['mascotas']);
        }
          break;
        
      }

    }
    else
      alert("Credenciales incorrectos")
  }, error => { 
    alert("Credenciales incorrectos") 
  });


}



  get loginusuarioNoValido() {
  return this.formDatoslogin.get("user")?.invalid && this.formDatoslogin.get("user")?.touched;
}
  get loginpasswordNoValido() {
  return this.formDatoslogin.get("password")?.invalid && this.formDatoslogin.get("password")?.touched;
}
  get perfilNoValido() {
  return this.formDatoslogin.get("perfil")?.invalid && this.formDatoslogin.get("perfil")?.touched;
}
}