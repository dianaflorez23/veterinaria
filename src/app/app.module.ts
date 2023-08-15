import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { LoginComponent } from './pages/login/login.component';
import { MascotasComponent } from './pages/mascotas/mascotas.component';
import { ActualizarMascotasComponent } from './pages/mascotas/actualizar-mascotas.component';
import { ActualizarClienteComponent } from './pages/cliente/actualizar-cliente.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { PagesComponent } from './pages/pages.component';
import { RestablecerContrasenaComponent } from './pages/login/restablecer-contrasena/restablecer-contrasena.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ColaboradorComponent } from './pages/colaborador/colaborador.component';
import { ActualizarColaboradorComponent  } from './pages/colaborador/actualizar-colaborador.component';
import { ActualizarProductoComponent } from './pages/producto/actualizar-producto.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { InterceptorMascotasInterceptor } from './interceptor-mascotas.interceptor';
import { CookieService } from 'ngx-cookie-service';
import { ModalComponent } from './modal/modal.component';





@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    LoginComponent,
    MascotasComponent,
    ActualizarMascotasComponent,
    ActualizarClienteComponent,
    FooterComponent,
    HeaderComponent,
    PagesComponent,
    RestablecerContrasenaComponent,
    ProductoComponent,
    ClienteComponent,
    ActualizarClienteComponent,
    ActualizarProductoComponent,
    ClienteComponent,
    ColaboradorComponent,
    ActualizarColaboradorComponent,
    NotFoundComponent,
    ModalComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorMascotasInterceptor, multi: true},CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
