import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { colaboradorModel, RestablecerContrasenaModel,  } from 'src/app/models/modelColaborador';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';

@Component({
  selector: 'app-restablecer-contrasena',
  templateUrl: './restablecer-contrasena.component.html',
  styleUrls: ['./restablecer-contrasena.component.css']
})
export class RestablecerContrasenaComponent {
  habilitado:boolean =false;
  
  //Formulario

  formRestablecerContrasena: FormGroup = new FormGroup({});
  listalogin: colaboradorModel[] = [];
  restablecerfor: RestablecerContrasenaModel  = new RestablecerContrasenaModel() ;

  constructor( 
     private fb: UntypedFormBuilder
   , private WSserGeneral : WSSerGeneralService
   , private router:Router
   , private activateRoute: ActivatedRoute
   , private coreService: CoreService)   {
       
  }

  ngOnInit(): void {
   this.habilitado = false;
   this.constructorFormularioRestablecerContrasena();}

   constructorFormularioRestablecerContrasena(){
     this.formRestablecerContrasena = this.fb.group({
      UsuarioRed: ["", [Validators.required]],
      nuevaContrasena: ["", [Validators.required]],
      ConfirmarContrasena: ["", [Validators.required]],
     })
    }

    validarUsuario(){
      if (this.formRestablecerContrasena.invalid) { return }    
      if ( this.formRestablecerContrasena.value.nuevaContrasena !== this.formRestablecerContrasena.value.ConfirmarContrasena)
      {alert ("Contraseñas no coniciden") }
      else {
      this.restablecerfor.UsuarioRed = this.formRestablecerContrasena.value.UsuarioRed;
      this.restablecerfor.nuevaContrasena = this.formRestablecerContrasena.value.nuevaContrasena;
      this.restablecerfor.ConfirmarContrasena = this.formRestablecerContrasena.value.ConfirmarContrasena;
       this.coreService.validarContrasena(this.restablecerfor);
    
      this.router.navigate(['login']); 
     }
         
    }


   
   get nuevaContrasenaNoValido(){
    return this.formRestablecerContrasena.get("nuevaContrasena")?.invalid && this.formRestablecerContrasena.get("nuevaContrasena")?.touched;
   }
   get UsuarioRedNoValido(){
    return this.formRestablecerContrasena.get("UsuarioRed")?.invalid && this.formRestablecerContrasena.get("UsuarioRed")?.touched;
   }
   get ConfirmarContrasenaNoValido(){
    return this.formRestablecerContrasena.get("ConfirmarContrasena")?.invalid && this.formRestablecerContrasena.get("ConfirmarContrasena")?.touched;
   }  
}
