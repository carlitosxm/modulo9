import { Component } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine',
  imports: [],
  templateUrl: './cine.html',
  styleUrl: './cine.css',
})
export class Cine {
  public titulo?: string;
  public peliculas: Array<Pelicula>;

  constructor() {
    this.titulo = "Modelos";
    this.peliculas = [
      new Pelicula(1, "Toy Story", "aventura", "Jbhon Lasseter", 1995, "Disney Plus", true),
      new Pelicula(2, "The Matrix", "Ciencia Ficción", "Lana Wachowski", 1999, "Max", false),
      new Pelicula(3, "Inception", "Ciencia Ficción", "Christopher Nolan", 2010, "Netflix", true),
      new Pelicula(4, "Pulp Fiction", "Crimen", "Quentin Tarantino", 1994, "Prime Video", false),
      new Pelicula(5, "Spirited Away", "Animación", "Hayao Miyazaki", 2001, "Netflix", true),
      new Pelicula(6, "The Dark Knight", "Acción", "Christopher Nolan", 2008, "Max", true),
      new Pelicula(7, "Parasite", "Drama", "Bong Joon-ho", 2019, "Prime Video", false),
      new Pelicula(8, "Interstellar", "Ciencia Ficción", "Christopher Nolan", 2014, "Prime Video", true),
      new Pelicula(9, "Spider-Man: Into the Spider-Verse", "Animación", "Peter Ramsey", 2018, "Disney Plus", false),
      new Pelicula(10, "Gladiator", "Acción", "Ridley Scott", 2000, "Netflix", true),
    ];
  }

  ngOnInit(){
    console.log(this.peliculas);

    this.peliculas[1].titulo = "THE MATRIX"
  }

}
