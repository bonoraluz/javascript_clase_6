
 // Simulador de una pizzería

class Pizza {
    constructor(id, variedad, precio, tacc) {
        this.id = id;
        this.variedad = variedad.toLowerCase();
        this.precio = parseFloat(precio);
        this.tacc = tacc;
    }
}

const pizza1 = new Pizza(0, "Margarita", 16000, "Tiene TACC");
const pizza2 = new Pizza(1, "Especial", 20000, "Sin TACC");
const pizza3 = new Pizza(2, "Hawaiana", 22000, "Sin TACC");
const pizza4 = new Pizza(3, "Napolitana", 21000, "Tiene TACC");

const pizzas = [pizza1, pizza2, pizza3, pizza4];

// Menú de opciones

let opcion = prompt(
    "Bienvenido a nuestra pizzería.\n" +
    "¿Qué querés hacer?\n" +
    "1. Ver pizzas sin TACC\n" +
    "2. Buscar una pizza por variedad\n" +
    "3. Ver todas las variedades disponibles"
);

// Opción 1: FILTER
if (opcion === "1") {

    const sinTacc = pizzas.filter(
        (pizza) => pizza.tacc === "Sin TACC"
    );

    let mensaje = "Pizzas sin TACC:\n";

    sinTacc.forEach((pizza) => {
        mensaje += pizza.variedad + " - $" + pizza.precio + "\n";
    });

    alert(mensaje);
    console.log("Pizzas sin TACC:", sinTacc);

// Opción 2: FIND
} else if (opcion === "2") {

    const busqueda = prompt("¿Qué variedad de pizza buscás?");

    const pizzaEncontrada = pizzas.find(
        (pizza) => pizza.variedad === busqueda.toLowerCase()
    );

    if (pizzaEncontrada) {
        alert(
            "Encontramos tu pizza:\n" +
            pizzaEncontrada.variedad + "\n" +
            "Precio: $" + pizzaEncontrada.precio + "\n" +
            pizzaEncontrada.tacc
        );

        console.log("Pizza encontrada:", pizzaEncontrada);

    } else {
        alert("No encontramos esa variedad de pizza.");
    }

// Opción 3: MAP
} else if (opcion === "3") {

    const variedades = pizzas.map(
        (pizza) => pizza.variedad.toUpperCase()
    );

    alert("Nuestras variedades:\n" + variedades.join("\n"));
    console.log("Variedades disponibles:", variedades);

} else {
    alert("Opción no válida.");
}
