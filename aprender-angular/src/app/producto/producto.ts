import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Usuario } from "../usuario/usuario";
import { Ventas } from "../ventas/ventas";


@Component({
    selector: "mi-producto",
    imports:[Pelicula,Usuario,Ventas],
    standalone: true,
    templateUrl: "producto.html",
    styleUrl: "producto.css"
})

export class Producto {

    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;

    public mostrar_peliculas: boolean=true;

    constructor() {
        this.nombre = "PORTATIL";
        this.marca = "ASUS";
        this.precio = 475;
        this.descripcion="mi producto es un ordenador";
    }

    ngOnInit(){
        console.log("El componente esta inicializaando");
    }

    ngOnChange(){
        console.log("Componente actualizado");
    }

    ngAfterViewInit(){
        console.log("La vista esta cargada");
    }

    cambiarNombre(){
        this.nombre="ASUS 177h"
    }

    ocultarPeliculas(valor: boolean){
        this.mostrar_peliculas=valor;
    }
}
