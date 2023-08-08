import { Component } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { clienteModel } from 'src/app/models/modelCiente';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {

 

  listaCliente: clienteModel[] = [];
  
  
  constructor(
    private coreService: CoreService
  , private router: Router) {
}

  ngOnInit(): void {
     this.listaCliente = this.coreService.getListaCliente()

  }

  CrearCliente(){

    this.router.navigate(['actualizarCliente/nuevo']);
  }

  EditarCliente(UsuarioRed:string){

    this.router.navigate(['actualizarCliente/' + UsuarioRed]);

  }

}

