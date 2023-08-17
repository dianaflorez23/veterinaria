import { Injectable } from '@angular/core';
import { clienteModel } from '../models/modelCiente';
import { MascotaModel } from '../models/modelMascota';
import { colaboradorModel, RestablecerContrasenaModel } from '../models/modelColaborador';
import { ModelSesion, ModelPerfil } from '../models/modelSesion';
import { Constantes } from '../pages/shared/Constantes';
import { productoModel } from '../models/modelProducto';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CoreService {

  listaMascotas: MascotaModel[] = [];
  ListaCliente: clienteModel[] = [];
  listaColaborador: colaboradorModel[] = [];
  listaUsuario: colaboradorModel[] = [];
  ListaProducto: productoModel[] = [];

  _modelSesion: ModelSesion = new ModelSesion();
  public _modelSesion$ = new Subject<ModelSesion>();
  
  perfilAdministrador !: ModelPerfil;
  perfilVendedor !: ModelPerfil;
  perfilCliente !: ModelPerfil;

  constructor(private cookies: CookieService) {

    let colaborador = new colaboradorModel();
    colaborador.UsuarioRed = "icm8905c";
    colaborador.perfil = Constantes.CONST_COD_PERFIL_ADM;

    this.listaColaborador.push(colaborador);

    this.perfilAdministrador = new ModelPerfil();
    this.perfilAdministrador.idPerfil = Number(Constantes.CONST_COD_PERFIL_ADM);
    this.perfilAdministrador.nombrePerfil = Constantes.CONST_NOMBRE_PERFIL_ADM;
    this.perfilAdministrador.rutasAcceso= ["/mascotas",
                                                  "/mascotas/:seleccion?nombre",
                                                  "/actualizarMascotas",
                                                  "/cliente",
                                                  "/actualizarCliente/:identificarCliente",
                                                  "/colaborador",
                                                  "/colaborador/:UsuarioRed",
                                                  "/actualizarColaborador",
                                                  "/producto/:identificarProducto",
                                                  "/producto/nuevo",
                                                  "/actualizarProducto"];
    
    this.perfilAdministrador.permisos = [0,1,
                                   2,
                                   3,
                                   5];

    this.perfilVendedor = new ModelPerfil();
    this.perfilVendedor.idPerfil = Number(Constantes.CONST_COD_PERFIL_VENDENDOR);
    this.perfilVendedor.nombrePerfil = Constantes.CONST_NOMBRE_PERFIL_VENDENDOR;
    this.perfilVendedor.rutasAcceso= [    "/mascotas/:seleccion?nombre",
                                          "/mascotas",
                                                  "/actualizarMascotas",
                                                  "/cliente",
                                                  "/actualizarCliente/:identificarCliente",
                                                  "/actualizarProducto"
                                                  ];
    this.perfilVendedor.permisos = [0,
                                         2,
                                         5];
                                                  

    this.perfilCliente = new ModelPerfil();
    this.perfilCliente.idPerfil = Number(Constantes.CONST_COD_PERFIL_CLIENTE);
    this.perfilCliente.nombrePerfil = Constantes.CONST_NOMBRE_PERFIL_CLIENTE;
    this.perfilCliente.rutasAcceso= [      "/actualizarMascotas",
                                           "/actualizarProducto"];
    this.perfilCliente.permisos = [0,
                                   5];
   }

  //#region mascota
  getListaMascotas() {
    this.listaMascotas = [];
    this.ListaCliente.forEach(cliente => {
      if(cliente.mascotas){
        cliente.mascotas.forEach(mascota => {
          this.listaMascotas.push(mascota);
        });
      }
     
    });
    return this.listaMascotas;
  }

  setListaMascotas(listaMascotas: MascotaModel[]) {
    this.listaMascotas = listaMascotas;
  }

  agregarMascota(mascota: MascotaModel) {
    this.listaMascotas.push(mascota);
  }
  // crear mascota
  crearMascota(mascota: MascotaModel) {
    let posicion = this.ListaCliente.findIndex(usuario => { return usuario.identificarCliente === mascota.seleccion; });
    if (!this.ListaCliente[posicion].mascotas)
      this.ListaCliente[posicion].mascotas = [];
    this.ListaCliente[posicion].mascotas.push(mascota);
    console.log(this.ListaCliente);
  }

  obtenerMascota(idcliente: string, nombreMascota: string) {
    let posicion = this.ListaCliente.findIndex(usuario => { return usuario.identificarCliente === idcliente; });
    let posicionMascota = this.ListaCliente[posicion].mascotas.findIndex(mascota => { return mascota.nombre === nombreMascota });
    return this.ListaCliente[posicion].mascotas[posicionMascota];
  }

    // actualizar mascota
    actualizarMascota(infoMascota: MascotaModel) {
      let posicion = this.listaMascotas.findIndex(a => a.seleccion == infoMascota.seleccion)
      if (posicion < 0) {
        alert('mascota no encontrado');
      }
      else {
        this.listaMascotas[posicion].nombre = infoMascota.nombre;
        this.listaMascotas[posicion].apodo = infoMascota.apodo;
        this.listaMascotas[posicion].edad = infoMascota.edad;
        this.listaMascotas[posicion].raza = infoMascota.raza;
        this.listaMascotas[posicion].color = infoMascota.color;
        console.log(this.listaMascotas);
        alert('mascota actualizado"')
      }
    }

  //#endregion mascota

  //#region Cliente
  getListaCliente() {
    return this.ListaCliente;
  }

  setListaCliente(ListaCliente: clienteModel[]) {
    this.ListaCliente = ListaCliente;
  }

  agregarCliente(usuario: clienteModel) {
    this.ListaCliente.push(usuario);
    console.log(this.ListaCliente);
  }
  //devuelve objeto cliente apartir del usuario de red
  obtenerCliente(_usuariored: string) {
    let posicion = this.ListaCliente.findIndex(a => a.identificarCliente == _usuariored);
    return this.ListaCliente[posicion];
  }
  // actualizar cliente
  actualizarCliente(infoCliente: clienteModel) {
    let posicion = this.ListaCliente.findIndex(a => a.identificarCliente == infoCliente.identificarCliente)
    if (posicion < 0) {
      alert('usuario no encontrado');
    }
    else {
      this.ListaCliente[posicion].PrimerNombre = infoCliente.PrimerNombre;
      this.ListaCliente[posicion].Apellidos = infoCliente.Apellidos;
      this.ListaCliente[posicion].segundoNombre = infoCliente.segundoNombre;
      console.log(this.ListaCliente);
      alert('usuario actualizado"')
    }
  }
  //#endregion Cliente  

  //#region colaborador
  getListaColaborador() {
    return this.listaColaborador;
  }

  setListaColaborador(listaColaborador: colaboradorModel[]) {
    this.listaColaborador = listaColaborador;
  }

  agregarColaborador(usuario: colaboradorModel) {
    //debugger;
    usuario.perfil = "2";
    this.listaColaborador.push(usuario);
    console.log(this.listaColaborador);
    console.log(usuario);
  }

  // actualizar colaborador
  actualizarColaborador(infoProducto: colaboradorModel) {
    let posicion = this.listaColaborador.findIndex(a => a.UsuarioRed == infoProducto.UsuarioRed)
    if (posicion < 0) {
      alert('cliente no encontrado');
    }
    else {
      this.listaColaborador[posicion].PrimerNombre = infoProducto.PrimerNombre;
      this.listaColaborador[posicion].segundoNombre = infoProducto.segundoNombre;
      this.listaColaborador[posicion].Apellidos = infoProducto.Apellidos;
      console.log(this.listaColaborador);
      alert('Colaborador actualizado"')
    }
  }
  //devuelve objeto colaborador apartir del usuario de red
  obtenerColaborador(_usuariored: string) {
    let posicion = this.listaColaborador.findIndex(a => a.UsuarioRed == _usuariored);
    return this.listaColaborador[posicion];
  }


  //Valida que el colaborador exista
  validarColaborador(_usuariored: string, perfil: string) {
    let posicion = this.listaColaborador.findIndex(a => a.UsuarioRed === _usuariored && a.perfil === perfil);
    if (posicion < 0)
      return false;
    else
      return true;
  }
  //#endregion colaborador

  //#region producto
  getListaProducto() {
    return this.ListaProducto;
  }

  setListaPorducto(ListaProducto: productoModel[]) {
    this.ListaProducto = ListaProducto;
  }

  agregarProducto(producto: productoModel) {
    this.ListaProducto.push(producto);
    console.log(this.ListaProducto);
  }

  //devuelve objeto producto apartir del id
  obtenerProducto(id: string) {
    let posicion = this.ListaProducto.findIndex(a => a.id == id);
    return this.ListaProducto[posicion];
  }

  actualizarProducto(producto: productoModel) {
    let posicion = this.ListaProducto.findIndex(a => a.id == producto.id)
    if (posicion < 0) {
      alert('Producto no encontrado');
    }
    else {
      this.ListaProducto[posicion].producto = producto.producto;
      this.ListaProducto[posicion].precio = producto.precio;
      console.log(this.ListaProducto);
      alert('Producto actualizado"')
    }
  }

  EliminarProducto(id: string) {
    let posicion = this.ListaProducto.findIndex(a => a.id == id);

    if (posicion < 0) {
      alert('Producto no encontrado');
    }
    else {
      this.ListaProducto.splice(posicion, posicion);
      alert('Producto eliminado"')
    }
  }

  //#endregion producto


  //validar que el login sea correcto
  loginCliente(_usuariored: string, _password: string) {
    let posicion = this.ListaCliente.findIndex(a => a.identificarCliente === _usuariored && a.password === _password);
    if (posicion < 0) {
      return false;
    }
    else {
      return true;
    }
  }



  //validar que el objeto de session exista
  validarSession() {
    if (this._modelSesion && this._modelSesion.nombreUsuario.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  // establecer contraseña
  validarContrasena(restablecer: RestablecerContrasenaModel) {
    let posicion = this.ListaCliente.findIndex(usuario => { return usuario.identificarCliente === restablecer.UsuarioRed; });
    if (posicion < 0) {
      alert('usuario no encontrado');
    }
    else {
      this.ListaCliente[posicion].password = restablecer.nuevaContrasena;
      this.ListaCliente[posicion].ConfirmarContrasena = restablecer.ConfirmarContrasena;
      console.log(this.ListaCliente);
      alert('se modifico contraseña exitosamente')
    }

  }
  //llena sesion
  llenarSession(_usuariored: string, perfil: number) {
    this._modelSesion.nombreUsuario = _usuariored;
    
    switch(perfil.toString()){
      case Constantes.CONST_COD_PERFIL_ADM: {
        this._modelSesion.perfil = this.perfilAdministrador;
        break;
      }
      case Constantes.CONST_COD_PERFIL_VENDENDOR:{ 
        this._modelSesion.perfil = this.perfilVendedor;  
        break;
      }
      case Constantes.CONST_COD_PERFIL_CLIENTE: {
        this._modelSesion.perfil = this.perfilCliente;
        break;
      }
    }

    this._modelSesion$.next(this._modelSesion);
  }

  getSesion(){ 
    return this._modelSesion;
  }
  getSesion$():Observable<ModelSesion>{ 
    return this._modelSesion$.asObservable();
  }

  cerrarSesion(){
    this._modelSesion =  new ModelSesion();
    this._modelSesion$.next(this._modelSesion);
  }












}
