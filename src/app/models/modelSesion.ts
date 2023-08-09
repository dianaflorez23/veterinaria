export class ModelSesion {
    public nombreUsuario: string = "";
    public perfil!: ModelPerfil;  
}

export class ModelPerfil{
    public idPerfil! : number;
    public nombrePerfil!:string;
    public rutasAcceso : string[] = [];
}