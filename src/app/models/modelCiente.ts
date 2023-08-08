import { MascotaModel } from "./modelMascota";
import { VehiculoModel } from "./modelVehiculo";


export class clienteModel {
    public PrimerNombre: string = "";
    public segundoNombre: string = "";
    public Apellidos: string = "";
    public identificarCliente: string = "";
    public password: string = "";    
    public ConfirmarContrasena: string = "";
    public mascotas:MascotaModel[] = [];
    public vehiculo:VehiculoModel[]=[];
}