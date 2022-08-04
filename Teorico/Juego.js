var piedra = "Piedra"
var papel  = "Papel"
var tijera = "Tijera"

function jugar( user , cpu ){
    if(user != cpu){
        if(user === piedra){
            if( cpu === papel )
                return "Perdiste"
            else
                return "Ganaste"
        }
        if(user === papel){
            if( cpu === tijera )
                return "Perdiste"
            else
                return "Ganaste"
        }
        if(user === tijera){
            if( cpu === piedra )
                return "Perdiste"
            else
                return "Ganaste"
        }
    }else
        return "Empate" 
}

console.log(jugar(papel,tijera))
