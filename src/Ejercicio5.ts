type Tipo = "nombre" | "correo" | "contraseña"

type Cambio = {
    tipo : Tipo
}

let Inicial : String;

function lista (cambio: Cambio[]){
    return cambio.reduce((acumulador, cambio) => {
        acumulador[cambio.tipo] += 1;
        return acumulador;
    },
    {
        nombre: 0,
        correo: 0,
        contraseña: 0,
    })
}