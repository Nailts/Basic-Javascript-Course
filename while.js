let estudiantes = ["Camilo","Nixon","Nicolas","Diego"];

function saludarEstudiantes(estudiante){

    console.log(`Hola, ${estudiante}`);

}

//-----------ciclo while------------///

while(estudiantes.length > 0){
    
    console.log(estudiantes);  //Este console.log se usó para demostrar el fncionamiento del ciclo
    let estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);

}