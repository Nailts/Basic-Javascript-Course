let frutas = ["manzana","mango","papaya","fresas","cerezas"];

console.log(frutas); // Imprime todo el array

console.log(frutas.length); // Imprime la cantidad de elementos del array

console.log (frutas[2]); // Elije un elemento dentro del array comenzando por la posicion 0

let masFrutas = frutas.push("uvas"); // Añade elementos al final del array

console.log(frutas);

let eliminar = frutas.pop("Uvas"); // Elimina el elemnto espexificado del array

console.log(frutas);

let nuevaLongitud = frutas.unshift("mandarina"); // Añade un elemento al incio del array

console.log(frutas);

let eliminarInicial = frutas.shift("mandarina"); // Elimina el elemento inicial del array

console.log(frutas);

let posicion = frutas.indexOf("cerezas"); //Muestra la posicion del elemento indicado

console.log(posicion);