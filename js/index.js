const categorias = []
class categoria{
    constructor(nombre, masJugado, año){
        this.nombre = nombre
        this.masJugado = masJugado
        this.año = año
    }
}

function todasLasCategorias(){
    categorias.push(new categoria("FPS", 0, 1993))
    categorias.push(new categoria("accion", 1, 1979))
    categorias.push(new categoria("guerra", 2, 1951))
    categorias.push(new categoria("zombies", 3, 1986))
}
todasLasCategorias()

function busquedaAño(){
    let fecha = prompt("Ingrese un año y se mostrará las categorias creadas hasta esa fecha")
    const resultado = categorias.filter((el) => el.año < fecha)
    console.table(resultado)
}
