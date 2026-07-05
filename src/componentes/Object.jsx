function Object() {
  //se crea el array de objetos
  const jugadores = [
    {
      jugador: "Messi",
      edad: 39,
      seleccion: "Argentina",
      anoto: true,
    },
    {
      jugador: "Cristiano",
      edad: 41,
      seleccion: "Portugal",
      anoto: true,
    },
    {
      jugador: "Neymar",
      edad: 34,
      seleccion: "Brasil",
      anoto: false,
    },
  ];

  //vamos a renderizar aquellos jugadores cuya edad sea mayor a 40
  //primero filtramos y luego renderizamos
  const mayores = jugadores
    .filter((jugador) => jugador.edad > 40)
    .map((jugador, indice) => <li key={indice}>{jugador.jugador}</li>);

  //vamos a renderizar aquellos jugadores que no marcaron goles
  const noAnotaron = jugadores
    .filter((jugador) => jugador.anoto === false)
    .map((jugador, indice) => <li key={indice}>{jugador.jugador}</li>);

  //retornamos la lista
  return (
    <>
        <h2>Mayores de 40</h2>
        <ol>{mayores}</ol>

        <h2>No anotaron</h2>
        <ol>{noAnotaron}</ol>
    </>
);
}

export default Object;
