import { Component } from '@angular/core';
import { MenuModel } from 'src/app/models/modelMenu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  listaMenu: MenuModel[] = [];

  ngOnInit(): void {

    this.listaMenu.push({ "idMenu": 1, "nombreMenu": "lista Usuarios" })
    this.listaMenu.push({ "idMenu": 2, "nombreMenu": "lista M ascotas" })
  }
}
