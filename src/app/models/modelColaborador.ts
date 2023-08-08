import { MascotaModel } from "./modelMascota";
import { VehiculoModel } from "./modelVehiculo";

export class colaboradorModel {
    public PrimerNombre: string = "";
    public segundoNombre: string = "";
    public Apellidos: string = "";
    public UsuarioRed: string = "";
    public password: string = "";    
    public ConfirmarContrasena: string = "";
    public perfil!: string ;
    public mascotas:MascotaModel[] = [];
    public vehiculo:VehiculoModel[]=[];
}

export class RestablecerContrasenaModel{
    public UsuarioRed : string = "";
    public nuevaContrasena :  string = "";
    public ConfirmarContrasena : string = "";

}