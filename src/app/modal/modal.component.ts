import { Component, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  
  
   @Input() labelTitulo!: string ;
   @Input() mostrarTitulo!: boolean ;
   @Input() txtContenido!: string ;
   @Input() mostrarContenido!: boolean ;
   @Input() labelBtnClose!: string ;
   @Input() mostrarClose!: boolean ;
   @Input() labelSave!: string;
   @Input() mostraSave!: boolean;
   @Input() longitudModal!: string ;
   @Input() colorDinamico1!: string; 
   @Input() colorDinamico2!: string; 
   @Input() idDinamico!: string ;
   @Output("btnGuardar") eventGuardar : EventEmitter <any> = new EventEmitter();
   @Output("btnCerrar") eventCerrar : EventEmitter <any> = new EventEmitter();


   ngOnInit(): void 
   {
    // this.abrirModal();
  } 

  ngAfterViewInit(): void{
    // this.abrirModal();
    
  }

   abrirModal(){
    console.log("abrirmodal")
    document.getElementById("verModal")?.click();
   }



   guardar(){
    this.eventGuardar.emit();
   }

   cerrar(){
    this.eventCerrar.emit();
   }
    


}
