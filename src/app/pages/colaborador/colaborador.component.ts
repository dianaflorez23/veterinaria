import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { colaboradorModel } from 'src/app/models/modelColaborador';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';
import { Constantes } from '../shared/Constantes';

@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html',
  styleUrls: ['./colaborador.component.css']
})
export class ColaboradorComponent {

  formDatoscolaborador: FormGroup = new FormGroup({});
  Listacolaborador: colaboradorModel[] = [];
  UsuarioRed!: string;

  constructor(
    private fb: UntypedFormBuilder
    , private WSserGeneral: WSSerGeneralService
    , private activateRoute: ActivatedRoute
    , private coreService: CoreService
    , private router: Router) {

  }

  ngOnInit(): void {
    //debugger
    
    this.UsuarioRed = "" + this.activateRoute.snapshot.paramMap.get("UsuarioRed");
    this.construirFormulariocolaborador();
        if ( this.UsuarioRed != Constantes.CONST_PARAM_IN_PATH){
    let colaboradorEditar = this.coreService.obtenerColaborador(this.UsuarioRed);
    console.log(colaboradorEditar);

    if (colaboradorEditar == null ){
      return;
    }

    this.formDatoscolaborador.patchValue({
      PrimerNombre: colaboradorEditar.PrimerNombre,
      segundoNombre: colaboradorEditar.segundoNombre,
      Apellidos: colaboradorEditar.Apellidos,
      UsuarioRed: colaboradorEditar.UsuarioRed,
      password: colaboradorEditar.password,
      ConfirmarContrasena: colaboradorEditar.ConfirmarContrasena,

    });
    }
}


  guardarColaborador() {
    //debugger
    if (this.formDatoscolaborador.invalid) { return }
    if ( this.UsuarioRed == "null" || this.UsuarioRed === Constantes.CONST_PARAM_IN_PATH){
      console.log(this.formDatoscolaborador.value);
    this.coreService.agregarColaborador(this.formDatoscolaborador.value);    
    }
    else {
      this.coreService.actualizarColaborador(this.formDatoscolaborador.value);
      
    }
    this.router.navigate(['actualizarColaborador']);
    
  }
  construirFormulariocolaborador() {
    this.formDatoscolaborador = this.fb.group({
      PrimerNombre: ["", [Validators.required]],
      segundoNombre: ["", [Validators.required]],
      Apellidos: ["", [Validators.required]],
      UsuarioRed: ["", [Validators.required]],
      password: ["", [Validators.required]],
      ConfirmarContrasena: ["", [Validators.required]],

    });
  }

  get PrimerNombreoNoValido() {
    return this.formDatoscolaborador.get("PrimerNombre")?.invalid && this.formDatoscolaborador.get("PrimerNombre")?.touched;
  }
  get segundoNombreNoValido() {
    return this.formDatoscolaborador.get("segundoNombre")?.invalid && this.formDatoscolaborador.get("segundoNombre")?.touched;
  }
  get ApellidosNoValido() {
    return this.formDatoscolaborador.get("Apellidos")?.invalid && this.formDatoscolaborador.get("Apellidos")?.touched;
  }
  get UsuarioRedNoValido() {
    return this.formDatoscolaborador.get("UsuarioRed")?.invalid && this.formDatoscolaborador.get("UsuarioRed")?.touched;
  }
  get passwordNoValido() {
    return this.formDatoscolaborador.get("password")?.invalid && this.formDatoscolaborador.get("password")?.touched;
  }
  get ConfirmarContrasenaNoValido() {
    return this.formDatoscolaborador.get("ConfirmarContrasena")?.invalid && this.formDatoscolaborador.get("ConfirmarContrasena")?.touched;
  }

  
  

  
  
  
}
