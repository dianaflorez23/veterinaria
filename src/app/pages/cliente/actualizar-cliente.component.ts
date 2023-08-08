import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clienteModel } from 'src/app/models/modelCiente';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';
import { Constantes } from '../shared/Constantes';


@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.component.html',
  styleUrls: ['./actualizar-cliente.component.css']
})
export class ActualizarClienteComponent {


  ListaCliente: clienteModel[] = [];
  //Formulario
  formRegistrarCliente: FormGroup = new FormGroup({});
  identificarCliente!: string;




  constructor(
    private fb: UntypedFormBuilder
    , private WSserGeneral: WSSerGeneralService
    , private activateRoute: ActivatedRoute
    , private coreService: CoreService
    , private router: Router
    , public formBuilder: FormBuilder
  ) {


  }

  ngOnInit(): void {

    this.identificarCliente = "" + this.activateRoute.snapshot.paramMap.get("identificarCliente");
    this.construirFormularioCliente();

    if (this.identificarCliente != Constantes.CONST_PARAM_IN_PATH) {
      
      let clienteEditar = this.coreService.obtenerCliente(this.identificarCliente);
      console.log(clienteEditar);
      
      this.formRegistrarCliente.patchValue({
        PrimerNombre: clienteEditar.PrimerNombre,
        segundoNombre: clienteEditar.segundoNombre,
        Apellidos: clienteEditar.Apellidos,
        identificarCliente: clienteEditar.identificarCliente,
      });

    }
  }

  guardarCliente() {
debugger;
    if (this.formRegistrarCliente.invalid) { return } 
   // if (this.formRegistrarCliente.value.password !== this.formRegistrarCliente.value.ConfirmarContrasena) { alert("Contraseñas no coniciden") }
    if (this.identificarCliente === Constantes.CONST_PARAM_IN_PATH) {
       this.coreService.agregarCliente(this.formRegistrarCliente.value);
       if (this.coreService.validarSession()){
        this.router.navigate(['cliente']);
       }
       else {this.router.navigate(['login']);}     

    }
    else {
      this.coreService.actualizarCliente(this.formRegistrarCliente.value);
      this.router.navigate(['cliente']);
    }

  }

  construirFormularioCliente() {
    this.formRegistrarCliente = this.fb.group({
      PrimerNombre: ["", [Validators.required]],
      segundoNombre: ["", [Validators.required]],
      Apellidos: ["", [Validators.required]],
      identificarCliente: ["", [Validators.required]],
      password: ["", [Validators.required]],
      ConfirmarContrasena: ["", [Validators.required]],

    });
  }

 


  get PrimerNombreoNoValido() {
    return this.formRegistrarCliente.get("PrimerNombre")?.invalid && this.formRegistrarCliente.get("PrimerNombre")?.touched;
  }
  get segundoNombreNoValido() {
    return this.formRegistrarCliente.get("segundoNombre")?.invalid && this.formRegistrarCliente.get("segundoNombre")?.touched;
  }

  get ApellidosNoValido() {
    return this.formRegistrarCliente.get("Apellidos")?.invalid && this.formRegistrarCliente.get("Apellidos")?.touched;
  }
  get identificarClienteNoValido() {
    return this.formRegistrarCliente.get("identificarCliente")?.invalid && this.formRegistrarCliente.get("identificarCliente")?.touched;
  }
  get passwordNoValido() {
    return this.formRegistrarCliente.get("password")?.invalid && this.formRegistrarCliente.get("password")?.touched;
  }
  get ConfirmarContrasenaNoValido() {
    return this.formRegistrarCliente.get("ConfirmarContrasena")?.invalid && this.formRegistrarCliente.get("ConfirmarContrasena")?.touched;
  }

}
