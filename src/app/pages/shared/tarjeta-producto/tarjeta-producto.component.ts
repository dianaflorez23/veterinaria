import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { productoModel } from 'src/app/models/modelProducto';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-tarjeta-producto',
  templateUrl: './tarjeta-producto.component.html',
  styleUrls: ['./tarjeta-producto.component.css']
})
export class TarjetaProductoComponent {
  listaProducto: productoModel[] = []; 
  idDinamico!: string ;

   @Input()labelProudcto!: string ;
   @Output("btnEliminar") eventEliminar : EventEmitter <any> = new EventEmitter();
   @Output("btnEditar") eventEditar : EventEmitter <any> = new EventEmitter();

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
    console.log("tarjeta")
    //this.coreService.EliminarProducto(id);
    //this.router.navigate(['actualizarProducto']);
    this.eventEliminar.emit(id);
  }
  
  EditarProducto(id:string){
    console.log("tarjeta")
    //this.coreService.EliminarProducto(id);
    //this.router.navigate(['actualizarProducto']);
    this.eventEditar.emit(id);
  }

  validarPermisos(opcion : number){
    return this.coreService.getSesion().perfil.permisos.includes(opcion);
  }

  abrirproducto(){
      document.getElementById(this.idDinamico)?.click();
  }
  
}


