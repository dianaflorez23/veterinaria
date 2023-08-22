import { Component } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { clienteModel } from 'src/app/models/modelCiente';
import { productoModel } from 'src/app/models/modelProducto';
import { CoreService } from 'src/app/services/core.service';
import { WSSerGeneralService } from 'src/app/services/wsser-general.service';
import { Constantes } from '../shared/Constantes';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  formDatosProducto: FormGroup = new FormGroup({});
  producto: productoModel [] = [];
  identificarProducto!: string;


  constructor( 
    private fb: UntypedFormBuilder
    , private WSserGeneral : WSSerGeneralService
    , private activateRoute: ActivatedRoute
    , private coreService: CoreService
    , private router: Router
    ,private sanitizer: DomSanitizer)
    {
        
   }

   ngOnInit(): void {
    debugger;
    this.identificarProducto = "" + this.activateRoute.snapshot.paramMap.get("identificarProducto");
    this.construirFormularioProducto();

    if (this.identificarProducto != Constantes.CONST_PARAM_IN_PATH) {

      let productoObtenido = this.coreService.obtenerProducto(this.identificarProducto);      
      this.formDatosProducto.patchValue({
        id: productoObtenido.id,
        producto: productoObtenido.producto,
        precio: productoObtenido.precio,
      });

    }
    
    
  }

  getBase64 = ($event: any): Promise<string | null> => {
    return new Promise((resolve, reject) => {
      try {
        const unsafeImg = window.URL.createObjectURL($event);
        const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
        const reader = new FileReader();
        
        reader.onload = () => {
          resolve(reader.result as string);
        };
  
        reader.onerror = () => {
          resolve(null);
        };
        
        reader.readAsDataURL($event);
      } catch (e) {
        resolve(null);
      }
    });
  };

 async updateSource(event:any) {
    const imgCapturada = event.target.files[0];
    let base64 = await this.getBase64 (imgCapturada);
      this.formDatosProducto.patchValue({
        imagen: base64
      });
    
  }

  guardarProducto(){
    //debugger;
    if (this.formDatosProducto.invalid) { return } 

    if (this.identificarProducto === Constantes.CONST_PARAM_IN_PATH) {
      this.coreService.agregarProducto(this.formDatosProducto.value);      
   }
   else {
     this.coreService.actualizarProducto(this.formDatosProducto.value);     
   }
   this.router.navigate(['actualizarProducto']);

  }

  construirFormularioProducto(){
    this.formDatosProducto = this.fb.group({
      id: ["", [Validators.required]],
      producto: ["", [Validators.required]],
      precio: ["", [Validators.required]],
      imagen: ["", [Validators.required]],

    });
   }



   get ProductoNoValido() {
    return this.formDatosProducto.get("producto")?.invalid && this.formDatosProducto.get("producto")?.touched;
  }

  get PrecioNoValido() {
    return this.formDatosProducto.get("precio")?.invalid && this.formDatosProducto.get("precio")?.touched;
  }

  get idNoValido() {
    return this.formDatosProducto.get("id")?.invalid && this.formDatosProducto.get("id")?.touched;
  }
  

  
}
