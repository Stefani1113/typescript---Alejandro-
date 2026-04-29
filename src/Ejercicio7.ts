type Categoria = "alimentos" | "tecnología" | "papelería";

type Producto = {
    id: number;
    nombre: string;
    cantidad: number;
    categoria: Categoria;
};

function tieneBajoStock(producto: Producto): boolean {
    if (producto.categoria === "alimentos") {
    return producto.cantidad < 20;
}

    if (producto.categoria === "tecnología") {
    return producto.cantidad < 5;
}

    if (producto.categoria === "papelería") {
    return producto.cantidad < 50;
}

    return false;
}