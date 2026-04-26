type Tipo = "Texto"| "Numero" | "Email";

type CampoFormulario = {
    nombre: string;
    tipo: Tipo;
    valor: number | string
}

function validacion (campoformulario : CampoFormulario[]) {
    return campoformulario.filter((campo) => {
        if (campo.tipo === "Numero" ) {
            return typeof campo.valor !== "number"
        } 
        else{
            return typeof campo.valor !== "string"
        }
    }) .map((campo) => {
        return campo.nombre
    }) 
}



