import { Component } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  ngOnInit(){
    console.log("el componente esta arrancado");
  }

  ngOnDestroy(){
    console.log("El componente  esta elimando");
  }
}
