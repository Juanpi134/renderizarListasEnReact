function Object(){
    //se crea el array de objetos
    const jugadores = [
        {
            jugador:"Messi",
            edad:39,
            seleccion:"Argentina",
            anoto:true
        },
        {
            jugador:"Cristiano",
            edad:41,
            seleccion:"Portugal",
            anoto:true
        },
        {
            jugador:"Neymar",
            edad:34,
            seleccion:"Brasil",
            anoto:false
        }
    ]

    //vamos a renderizar aquellos jugadores cuya edad sea mayor a 40
    const mayores = jugadores.filter((jugador) => {
        return <li>{jugador.edad > 40}</li>
    })

    //vamos a renderizar aquellos jugadores que no marcaron goles
    const noAnotaron = jugadores.filter((jugador) => {
        return <li>{jugador.anoto === false}</li>
    })

    //retornamos la lista
    return (<ol>{mayores}</ol>)
    return (<ol>{noAnotaron}</ol>)
}


export default Object