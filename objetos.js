//------Creacion de objetos----//

let miAuto = {          //<-----Declaracion del objeto   
    marca: "Toyota",    //<-----Propiedades del objeto
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){    //<-----Metodo para imprimir el modelo y el año
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

console.log(miAuto); //Accedemos a las propiedades del objeto

console.log(miAuto.marca);//Con este metodo accdemos a una propiedad especifica del objeto

miAuto.detalleDelAuto();

//-------------Funcion constructora----------------------//

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//-------------Ejecutando la funcion conbstructiva "auto-----------//"

let autoNuevo = new auto("Tesla","Model 3","2020");    //<------new es un objeto que deriva de otro objeto 

console.log(autoNuevo); //<-----Muestra el nuevo objeto derivado de la funcion constructiva "auto"

let autoNuevo2 = new auto("Tesla", "Model x", "2018");
let autoNuevo3 = new auto("Toyota", "Corolla", "2020");

console.log(autoNuevo2);
