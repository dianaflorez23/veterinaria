import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

   titulo: string = "Ejemplo de modal";
   contenido: string = "contenido de la modal";
   Close: string = "cerrar";
   Save: string = "guardar";

}
