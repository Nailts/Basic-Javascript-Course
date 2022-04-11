    let edad = 18;

    if (edad===18){
        console.log("Este ciudadano puede votar por primera vez");
    }else if(edad>18){
        console.log("Este ciudadano ya ha votado");
    }else {
        console.log("Aun no puedes votar");
    }

    let numero = 1;

    let resultado = numero == 1 ?  "Soy un uno " : "No soy un uno ";


    //-----------Reto piedra papel o tijeras con if/else-------------//

    let jugador1;
    let jugador2;

    function piedraPapelTijeras (jugador1, jugador2){            

        if (jugador1 = "piedra" && jugador2 == "tijeras") {

            console.log("piedra vence tijeras: Jugador 1 gana");         
        }

        else if (jugador1 = "piedra" && jugador2 == "papel") {

            console.log("papel vence piedra: Jugador 2 gana");         
        }
        
        else if (jugador1 = "papel" && jugador2 == "piedra") {

            console.log("papel vence piedra: Jugador 1 gana");         
        } 

        else if (jugador1 = "papel" && jugador2 == "tijeras") {

            console.log("tijeras vencen papel: Jugador 2 gana");         
        }
        
        else if (jugador1 = "tijeras" && jugador2 == "papel") {

            console.log(" tijeras vencen papel: Jugador 1 gana");         
        } 

        else if (jugador1 = "tijeras" && jugador2 == "piedra") {

            console.log("piedra vencen tijeras: Jugador 2 gana");         
        }
        
        else if (jugador1 = "papel" && jugador2 == "papel") {

            console.log("Es un empate de papel");         
        }         

        else if (jugador1 = "tijeras" && jugador2 == "tijeras") {

            console.log("Es un empate de tijeras");         
        }  
        
        else if (jugador1 = "piedra" && jugador2 == "piedra") {

            console.log("Es un empate de piedras");         
        }         
    }
    

