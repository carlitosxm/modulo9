import { Component } from "@angular/core";
import { Pelicula } from "../pelicula/pelicula";
import { Usuario } from "../usuario/usuario";
import { Ventas } from "../ventas/ventas";


@Component({
    selector: "mi-producto",
    imports:[Pelicula,Usuario,Ventas],
    templateUrl: "producto.html",
    styleUrl: "producto.css"
})

export class Producto {

    public nombre: string;
    public marca: string;
    public precio: number;
    public descripcion: string;


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

    cambiarNombre(){
        this.nombre="ASUS 177h"
    }
}
