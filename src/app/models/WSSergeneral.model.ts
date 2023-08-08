export class RequestAdmParametros {
   public accion!: string;
   public canal!: string;
   public codapp!: string;
   public nombre!: string;
   public valor!: string;
}

export class ResponseAdmParametros{    
    public codigo!: number;
    public cursorparametros!: ModelCursorparametros; 
    public descripcion!: string;  
}

export class ModelCursorparametros{ 
    public parametros : ModelParametros[] = []; 
 }
export class ModelParametros{  
    public codapp!: string;
    public nombre!: string;
    public valo!: string;
}

// -----------  Tarea 
export class RequestAdmPantallas {    
    public accion!: string;
    public canal!: string;
    public idpantalla!: number;
    public idsitio!: string;
    public modulo!: string;
    public nombre!: string;
}

export class ResponseAdmPantallas {
    
    public codigo!: number;
    public cursorpantallas!: ModelCursorPantallas;
    public descripcion!: string;
}

export class ModelCursorPantallas {
    public pantalla : Modelpantalla [] = [];
   
}

export class Modelpantalla {
   public idpantalla!: number;
   public idsitio!: string;
   public modulo!: string;
   public nombre!: string;
}


// -----------  Tarea 2 

export class RequestlogsGuardar {
    
    public applicationName!: string;
    public channel!: string;
    public codResp!: string;
    public dateEnd!: string;
    public dateIni!: string;
    public descResp!: string;
    public lavelLog!: string;
    public logId!: 0;
    public request!: string;
    public response!: string;
    public serviceName!: string;
    public transacionId!: string;
    public userName!: string

}

export class ResponselogsGuardar{
    
    public descripcion!: string;
    public codigoRespuesta!: 0;
    public outTblTransLogsEaf!: []
    
}

export class RequestloginLdap {
    public pass!: string;
    public user!: string;
}

export class ResponsetloginLdap {
    public descripcion!: boolean;
    
}