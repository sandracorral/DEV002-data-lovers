export const operaciones = {

  //ordenar por directores
  peliculasOrdenadasPorDirector(peliculas) {
    peliculas = peliculas.sort((a, b) => {
      a = a.director.toLowerCase();
      b = b.director.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return peliculas;
  },

  //ordenar por año
  peliculasOrdenadasPorAno(peliculas) {
    peliculas = peliculas.sort((a, b) => {
      a = a.release_date.toLowerCase();
      b = b.release_date.toLowerCase();
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return peliculas;
  },

  //método para distingir los productores
  llamarProductores(peliculas) {
    let pelicula;
    let todosLosProductores = [];
    //En este ciclo for recorrimos el array de películas y luego con el if trajimos los directores pero no cada vez que estuvieran presentes sino que vinieran sólo una vez.
    for (let i = 0; i < peliculas.length; i++) {
      pelicula = peliculas[i];
      if (!todosLosProductores.includes(pelicula.producer)) {
        todosLosProductores.push(pelicula.producer);
      }
    }
    return todosLosProductores;
  },

  //método de filtrar por productor
  filtrarPorProductor(peliculas,nameProducer){
    
    let peliculasdelproductor= peliculas.filter(pelicula =>pelicula.producer===nameProducer);
    return peliculasdelproductor

  },
  // realizarCalculo(peliculas,rt_score){

  //   let realizandoelcalculo=

  // },



}
  
