import { Component } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  imports: [],
  templateUrl: './prestamos.html',
  styleUrl: './prestamos.css',
})
export class Prestamos {
  web ="https://amazon.com"; 
  estadoMensaje=false;
  prestamosList = [
    { id: 1, monto: 1500, estado: "Aprobado" },
    { id: 2, monto: 3000, estado: "Pendiente" },
    { id: 3, monto: 500,  estado: "Aprobado" },
    { id: 4, monto: 12000, estado: "Pendiente" },
    { id: 5, monto: 4500, estado: "Aprobado" },
    { id: 6, monto: 2200, estado: "Pendiente" }
  ];


  mostrarMensaje(){
    if (!this.estadoMensaje){
      this.estadoMensaje=true;
    }else{
      this.estadoMensaje=false;
    }
  }
}
