import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { clienteModel } from 'src/app/models/modelCiente';
import {  } from 'src/app/models/modelColaborador';
import { MascotaModel } from 'src/app/models/modelMascota';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';

@Component({
  selector: 'app-actualizar-mascotas',
  templateUrl: './actualizar-mascotas.component.html',
  styleUrls: ['./actualizar-mascotas.component.css']
})
export class ActualizarMascotasComponent {

  Listamascotas: MascotaModel[] = [];
  seleccion!: string;
  nombre!: string;


  constructor(
    private coreService: CoreService
  , private router: Router
  , private activateRoute: ActivatedRoute) {
}

  ngOnInit(): void {

    if (!this.coreService.validarSession())
      this.router.navigate(['login']);



      this.Listamascotas = this.coreService.getListaMascotas();

  }

  EditarMascota(seleccion:string,nombre:string)
  {
    this.router.navigate(['mascotas/'] , {queryParams:{ seleccion,nombre }});
  }

}

