function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

let autos = [];

for (let i = 0; i < 30; i++) {
    
    let marca = prompt("Porfavor insertar la marca del auto");
    
    let modelo = prompt("Porfavor insertar el modelo del auto");
    
    let annio = prompt("Porfavor insertar el año del auto");
    
    autos.push(new auto (marca, modelo, annio));  
}

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i]);
}