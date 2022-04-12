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
