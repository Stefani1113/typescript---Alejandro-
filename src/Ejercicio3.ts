type SMS = {
    numero: number;
    mensaje: string;
}
type Email = {
    receptor: string;
    mensaje: string
}
type Push = {
    esquina: string
}

type Notificacion = SMS | Email | Push

function enviarNotificacion (notificacion: Notificacion){
        if ("numero" in notificacion) {
            console.log("Este es un SMS")
        } else if ("receptor" in notificacion){
            console.log("Este es un Email")
        } else {
            console.log("Este es un Push")
        }
    }

