import { Component } from "@angular/core";

@Component({
    selector: "mi-perfil",
    templateUrl: "miPerfil.html",
    styleUrl: "miPerfil.css"
})

export class miPerfil {

    public nombre: string;
    public edad:number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;

    constructor() {
        this.nombre=" Juan Pérez.";
        this.edad=30;
        this.ocupacion="Soy Desarrollador de Software.";
        this.direccion="Av. Amazonas y Río Coca, Quito, Ecuador.";
        this.telefono="+593 999 999 999";

        console.log("Se cargó el componente de perfil correctamente.");
    }
}