//--------Uso de metodos en los objetos------//

let articulos= [                       //<----- array que contiene objetos

    {nombre: "Bicicleta", costo:3000},
    {nombre: "Juguete para perro", costo:200},
    {nombre: "Videojuego", costo:5000},
    {nombre: "DVD", costo:750},
    {nombre: "Bate", costo:1250},
    {nombre: "Avion de juguete", costo:150},
    {nombre: "Mouse de computador", costo:2600},
    {nombre: "Monitor", costo:3700},
];

//---------Metodo filter------///

let articulosFiltrados = articulos.filter( //<------Filtra las propiedades de los objetos
    function(articulo){
        return articulo.costo <= 500
    }
);

console.log(articulosFiltrados);


//--------------Metodo map------//

let nombreArticulos = articulos.map(              //<-----mapea propiedades de los objetos
    function (articulo){
        return articulo.nombre
    }   
);

console.log(nombreArticulos);

//--------Metodo find--------------//

let encontrarArticulos = articulos.find(
    function (articulo) {
        return articulo.nombre === "Videojuego"
    } 
);

console.log(encontrarArticulos);    


//-------Metodo forEach ----------------//

articulos.forEach(
    function(articulo){
        console.log(articulo.nombre);
    }
);
 

//---------Metodo some ---------------//

let articulosBaratos = articulos.some(
    function(articulo){
        return articulo.costo >= 7000;
    }
);

console.log(articulosBaratos);