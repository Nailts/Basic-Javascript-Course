//------Trabajar los ciclos para recorrer los arrays-----//
let estudiantes = ["Oscar","Brayan","Kevin","Juan"];

function saludarEstudiantes(estudiante){

    console.log(`Hola, ${estudiante}`);

}

//-----------------Ciclo for------------------//

for(let i = 0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);

}

//------Ciclo for con distinta estructura-------////

for(let estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}