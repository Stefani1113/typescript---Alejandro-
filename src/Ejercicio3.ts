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

function enviarNotificacion (notificacion: Notificacion []){
    return notificacion.filter((notificacion: Notificacion) =>{

        if (enviarNotificacion === Notificacion.SMS) {
            console.log("Este es un SMS")
        } else if (enviarNotificacion === Notification.Email){
            console.log("Este es un Email")
        } else {
            console.log("Este es un Push")
        }
    })
}