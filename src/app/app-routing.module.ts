import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { PagesComponent } from './pages/pages.component';
import { ActualizarMascotasComponent } from './pages/mascotas/actualizar-mascotas.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { ActualizarClienteComponent } from './pages/cliente/actualizar-cliente.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { RestablecerContrasenaComponent } from './pages/login/restablecer-contrasena/restablecer-contrasena.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ActualizarProductoComponent } from './pages/producto/actualizar-producto.component';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { ActualizarColaboradorComponent } from './pages/colaborador/actualizar-colaborador.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './guards/auth.guard';




const routes: Routes = [
  {path:'login', component:LoginComponent},
  {
    path:'', component:PagesComponent,
    canActivate:[AuthGuard],
    children:[
    {path:'mascotas', component:MascotasComponent  },
    {path:'mascotas/:seleccion?nombre', component:MascotasComponent},
    {path:'actualizarMascotas', component:ActualizarMascotasComponent},
    {path:'cliente', component:ClienteComponent},
    {path:'actualizarCliente/:identificarCliente', component:ActualizarClienteComponent},
    {path: 'restablecerContrasena', component:RestablecerContrasenaComponent},
    {path: 'colaborador', component:ColaboradorComponent},
    {path: 'colaborador/:UsuarioRed', component:ColaboradorComponent},
    {path: 'actualizarColaborador', component:ActualizarColaboradorComponent},
    {path: 'producto/:identificarProducto', component:ProductoComponent},
    {path: 'actualizarProducto', component:ActualizarProductoComponent},   
    {path: "**", component:NotFoundComponent},    
   ]
  }
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
