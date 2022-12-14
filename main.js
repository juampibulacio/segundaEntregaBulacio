//casas o departamentos para alquilar en vacacaciones
class Casa {
    constructor(dirección, id, ambientes, precio, mascotas, pileta) {
        this.dirección = dirección;
        this.id = id;
        this.ambientes = ambientes;
        this.precio = precio; //el precio por día
        this.mascotas = mascotas;
        this.pileta = pileta;
    }
}

//arrays según si las casas aceptan o no inquilinos con mascotas
const aceptanMascotas = [];
const rechazanMascotas = [];

//Casas disponibles de acuerdo a si aceptan o no mascotas

aceptanMascotas.push(new Casa("Mariategui 589", 1, 3, 2500, true, "con pileta"));
aceptanMascotas.push(new Casa("Enzo Fernández 310", 2, 5, 2000, true, "sin pileta"));
aceptanMascotas.push(new Casa("Lucanor Pereira 29", 3, 7, 5000, true, "con pileta"));
aceptanMascotas.push(new Casa("Patricia Requena 9802", 4, 2, 1000, true, "sin pileta"));

rechazanMascotas.push(new Casa("Carlos Alberto García 579", 5, 2, 1000, false, "sin pileta")); 
rechazanMascotas.push(new Casa("Idea Vilariño 8147", 6, 3, 1500, false, "sin pileta")); 
rechazanMascotas.push(new Casa("Mario Levrero 754", 7, 8, 8000, false, "con pileta")); 
rechazanMascotas.push(new Casa("Sergio Chejfec 96", 8, 5, 3500, false, "con pileta")); 


//después del mensaje de bienvenida consulto al cliente si va a viajar con mascota

alert("Bienvenido");


let viajaConMascota = prompt("¿Viaja con mascota? (sí/no)")

//Muestro las opciones de los arrays según su respuesta

if (viajaConMascota === "sí" || viajaConMascota === "si") {
    for (const edificio of aceptanMascotas) {
        alert("Opción " + edificio.id + ". Ubicada en: " + edificio.dirección + ". " + edificio.ambientes + " ambientes, " + edificio.pileta + ".");
    }
} else if (viajaConMascota === "no") {
    for (const edificio of aceptanMascotas) {
        alert("Opción " + edificio.id + ". Ubicada en: " + edificio.dirección + ". " + edificio.ambientes + " ambientes, " + edificio.pileta + ".");
    }
    for (const edificio of rechazanMascotas) {
        alert("Opción " + edificio.id + ". Ubicada en: " + edificio.dirección + ". " + edificio.ambientes + " ambientes, " + edificio.pileta + ".");
    }
} else {
    alert("Ingrese una respuesta válida");
}



// Ahora el objetivo es dar el precio según la cantidad de días de alojamiento


//una variable que permita acceder al id de la casa elegida
let casaElegida = parseInt(prompt("Ingrese el numero de la opción en que se encuentra interesado para conocer el precio"));

//una variable con los días de alojamiento
let diasTotales = prompt ("ingrese la cantidad de días que quiere alquilar");

//función para multiplicar el precio diario por la cantidad de días de alojamiento

function Total (a,b) {
    let resultado = a * b;
    return resultado;
}

// a partir de la variable casaElegida accedo a un elemento de uno de los dos arrays disponibles
//multiplico el precio diario, una de las propiedades del elemento Casa, por los días de alojamiento
//devuelvo un mensaje con el costo total

let casaEncontrada;

if (casaElegida <= 4) {
    let casaEncontrada = aceptanMascotas.find(edificio => edificio.id == casaElegida) ;
    let precioTotal = Total(casaEncontrada.precio, diasTotales);
    alert("El precio total por " + diasTotales + " días de alojamiento en la opción elegida (" + casaElegida + ") sería de " + precioTotal + " pesos.")
} else if (casaElegida > 4 && casaElegida <= 8) {
    let casaEncontrada = rechazanMascotas.find(edificio => edificio.id == casaElegida) ;
    let precioTotal = Total(casaEncontrada.precio, diasTotales);
    alert("El precio total por " + diasTotales + " días de alojamiento en la opción elegida (" + casaElegida + ") sería de " + precioTotal + " pesos.")
} else {alert("hubo un error, intentelo de nuevo con una opción válida")};