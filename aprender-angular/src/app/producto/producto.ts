import { Component } from "@angular/core";


@Component({
    selector: "mi-producto",
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
}
