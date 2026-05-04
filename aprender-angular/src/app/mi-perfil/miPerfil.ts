import { Component } from "@angular/core";

@Component({
    selector:"mi-perfil",
    templateUrl:"miPerfil.html",
    styleUrl:"miPerfil.css"
})

export class miPerfil{
 constructor(){
    alert("¡Bienvenido al perfil, estás dentro de la aplicación!");
    console.log("Se cargó el componente de perfil correctamente.");
 }
}