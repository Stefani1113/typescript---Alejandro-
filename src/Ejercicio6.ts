type Categoria = "tareas" | "quices" | "examen";


type Calificacion = {
    estudianteId : number;
    materia : String;
    categoria : Categoria;
    nota : number
}

function promedioPorCategoria(
    datos: Calificacion[],
    estudianteId: number,   
    categoria: Categoria,
    callback: (nota: Calificacion) => boolean
) {
    const filtradas = datos.filter(callback);

    const notas = filtradas
    .filter((c) => c.estudianteId === estudianteId && c.categoria === categoria)
    .map((c) => c.nota);

    const suma = notas.reduce((acc, n) => acc + n, 0);

    return notas.length ? suma / notas.length : 0;
}