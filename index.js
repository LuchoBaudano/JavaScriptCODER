let continuar = false

function CuriosidadesGamer(){
    do {
        let juego = prompt("ingrese uno de los tres juegos").toLocaleLowerCase()
        if(juego == "resident evil 4"){
            alert("Al principio del juego los Ganados tendrán hachas que a medida que te las lanzan van sacando mas y mas hasta parecer que son infinitas y en el castillo los ganados te lanzaran dinamitas que también parecerán infinitas igualmente con los piratas en la isla cuando te lanzan flechas.")
        }
        if(juego == "grand theft auto sa"){
            alert("El Área 69 del juego es una calara referencia al Área 51, una sección de la Base de la Fuerza Aérea de Nellis, a 170 km al norte de Las Vegas (Nevada). Éste es uno de los lugares más secretos del mundo y aparentemente allí se prueban aeronaves secretas.")
        }
        if(juego == "call of duty black ops 2"){
            alert("En el mapa “Cove“, que es una isla, podemos ver a lo lejos el yate del otro mapa multijugador “Hijacked“.")
        }
        continuar = confirm ("desea continuar?")
    }while(continuar)
}
//*PARTE TRABAJO ARRAYS*//
    const juegos = ["resident evil 4","grand theft auto sa","call of duty black ops 2"]
    console.log(juegos [1]);
 
    console.log("Cantidad de juegos del array: "+juegos.length);