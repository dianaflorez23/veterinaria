import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModel } from 'src/app/models/modelMenu';
import { CoreService } from 'src/app/services/core.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  listaMenu: MenuModel[] = [];

  constructor(private coreService: CoreService
            , private router: Router){

  }

  ngOnInit(): void {

    this.listaMenu.push({ "idMenu": 1, "nombreMenu": "lista Usuarios" })
    this.listaMenu.push({ "idMenu": 2, "nombreMenu": "lista M ascotas" })
  }

  validarPermisos(opcion : number){
    return this.coreService.getSesion().perfil.permisos.includes(opcion);
  }

  cerrarCesion(){
    this.coreService.cerrarSesion();
    this.router.navigate(['login']);
    return;
  }


}
