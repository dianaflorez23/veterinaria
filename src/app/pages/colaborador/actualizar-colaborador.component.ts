import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { colaboradorModel } from 'src/app/models/modelColaborador';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-actualizar-colaborador',
  templateUrl: './actualizar-colaborador.component.html',
  styleUrls: ['./actualizar-colaborador.component.css']
})
export class ActualizarColaboradorComponent {
  listaColaborador: colaboradorModel[] = [];
  
  
  constructor(
    private coreService: CoreService
  , private router: Router) {
}
  ngOnInit(): void {
    debugger

     this.listaColaborador = this.coreService.getListaColaborador()
     

  }

  CrearColaborador(){

    this.router.navigate(['colaborador/nuevo']);
  }
  


  EditarColaborador(UsuarioRed:string){

    this.router.navigate(['colaborador/' + UsuarioRed]);

  }
  



}
