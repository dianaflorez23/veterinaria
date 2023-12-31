import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {  } from 'src/app/models/modelColaborador';
import { productoModel } from 'src/app/models/modelProducto';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.component.html',
  styleUrls: ['./actualizar-producto.component.css']
})
export class ActualizarProductoComponent {

  listaProducto: productoModel[] = []; 
  

  ngOnInit(): void {
    
    if(!this.coreService.validarSession())
       this.router.navigate(['login']);

      this.listaProducto = this.coreService.getListaProducto(); 
  }

  constructor(
    private coreService: CoreService
    , private router: Router){  
  }

  EliminarProducto(id:string){
    console.log("actgualizar")
    this.coreService.EliminarProducto(id);
    this.router.navigate(['actualizarProducto']);
  }

  EditarProducto(id:string){
    console.log("actgualizar")
    this.coreService.EliminarProducto(id);
    this.router.navigate(['actualizarProducto']);
 
  }
  
  validarPermisos(opcion : number){
    return this.coreService.getSesion().perfil.permisos.includes(opcion);
  }
 
  

}


