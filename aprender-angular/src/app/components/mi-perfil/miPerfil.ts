import { Component } from "@angular/core";
import { Cuenta } from "../cuenta/cuenta";
import { Transacciones } from "../transacciones/transacciones";
import { Prestamos } from "../prestamos/prestamos";

@Component({
    selector: "mi-perfil",
    imports:[Cuenta,Transacciones,Prestamos],
    templateUrl: "miPerfil.html",
    styleUrl: "miPerfil.css"
})

export class miPerfil {

    public nombre: string;
    public edad:number;
    public ocupacion: string;
    public direccion: string;
    public telefono: string;
    public mostrar: boolean=true;
    public nombreCliente:string ="Juan Perez";

    public mensajeRecibido:string="";

    recibirMensaje(mensaje:string){
        this.mensajeRecibido=mensaje;
    }

    constructor() {
        this.nombre=" Juan Pérez.";
        this.edad=30;
        this.ocupacion="Soy Desarrollador de Software.";
        this.direccion="Av. Amazonas y Río Coca, Quito, Ecuador.";
        this.telefono="+593 999 999 999";

        console.log("Se cargó el componente de perfil correctamente.");
    }

    ngDoCheck(){
        console.log("El componente actualizado");
    }

    cambiarEdad(){
        this.edad=40;
    }

    cambiarDireccion(){
        this.direccion="Dirección";
    }

    mostrarComponente(val: boolean){
        this.mostrar = val;
    }
}