import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { clienteModel } from 'src/app/models/modelCiente';
import { MascotaModel } from 'src/app/models/modelMascota';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.css']
})
export class MascotasComponent {

  formDatosMacota: FormGroup = new FormGroup({});
  Listamascotas: MascotaModel[] = [];
  identificarMascota: string = "";
  listaCliente: clienteModel[] = [];
  mascota: MascotaModel = new MascotaModel();
  seleccion!: string;
  nombre!: string;

  constructor(
    private fb: UntypedFormBuilder
    , private coreService: CoreService
    , private router: Router
    , private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    // debugger;
    if (!this.coreService.validarSession())
      this.router.navigate(['login']);

    this.construirFormularioMascota();

    this.activateRoute.queryParams.subscribe(params => {
      this.seleccion = params['seleccion'];
      this.nombre = params['nombre'];
    });
 
    if (this.seleccion && this.nombre) {
      this.mascota = this.coreService.obtenerMascota(this.seleccion, this.nombre);
      this.formDatosMacota.patchValue({
        seleccion: this.mascota.seleccion,
        nombre: this.mascota.nombre,
        apodo: this.mascota.apodo,
        edad: this.mascota.edad,
        raza: this.mascota.raza,
        color: this.mascota.color,

      });
    }
    this.listaCliente = this.coreService.getListaCliente();
  }



  construirFormularioMascota() {
    this.formDatosMacota = this.fb.group({
      seleccion: ["", [Validators.required]],
      nombre: ["", [Validators.required]],
      apodo: ["", [Validators.required]],
      edad: ["", [Validators.required]],
      raza: ["", [Validators.required]],
      color: ["", [Validators.required]],

    });
  }

  guardarMascota() {
    debugger;
    if (this.formDatosMacota.invalid) { return }
    this.mascota.seleccion = this.formDatosMacota.value.seleccion;
    this.mascota.nombre = this.formDatosMacota.value.nombre;
    this.mascota.apodo = this.formDatosMacota.value.apodo;
    this.mascota.edad = this.formDatosMacota.value.edad;
    this.mascota.raza = this.formDatosMacota.value.raza;
    this.mascota.color = this.formDatosMacota.value.color;

    if (this.seleccion && this.nombre) {
      this.coreService.actualizarMascota(this.mascota);
      this.router.navigate(['actualizarMascotas']);
   }
   else {
    
     this.coreService.crearMascota((this.mascota));
      this.router.navigate(['actualizarMascotas']);
   }


  }
  get nomMascotaNoValido() {
    return this.formDatosMacota.get("nombre")?.invalid && this.formDatosMacota.get("nombre")?.touched;
  }
  get apodoNoValido() {
    return this.formDatosMacota.get("apodo")?.invalid && this.formDatosMacota.get("apodo")?.touched;
  }

  get razaNoValido() {
    return this.formDatosMacota.get("raza")?.invalid && this.formDatosMacota.get("raza")?.touched;
  }
  get colorNoValido() {
    return this.formDatosMacota.get("color")?.invalid && this.formDatosMacota.get("color")?.touched;
  }

  

  
  

}

  // guardarCliente() {

  //   if (this.formRegistrarCliente.invalid) { return } 
  //  // if (this.formRegistrarCliente.value.password !== this.formRegistrarCliente.value.ConfirmarContrasena) { alert("Contraseñas no coniciden") }
  //   if (this.identificarCliente = Constantes.CONST_PARAM_IN_PATH) {
  //      this.coreService.agregarCliente(this.formRegistrarCliente.value);
  //      if (this.coreService.validarSession()){
  //       this.router.navigate(['cliente']);
  //      }
  //      else {this.router.navigate(['login']);}     

  //   }
  //   else {
  //     this.coreService.actualizarCliente(this.formRegistrarCliente.value);
  //     this.router.navigate(['cliente']);
  //   }

  // }






/* this.identificarMascota = "" + this.activateRoute.snapshot.paramMap.get("IdentificarMascota");
 console.log(this.identificarMascota);
 if (this.identificarMascota == "nuevo") {
   console.log("se crea mascota");
 }
 else {
   console.log("editar mascota")
 }

 let mascota: MascotaModel = new MascotaModel;
 mascota.raza = "Golden";
 mascota.edad = this.identificarMascota;
 this.coreService.agregarMascota(mascota);*/

    //this.construirFormularioMascota();