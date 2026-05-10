import { Component } from '@angular/core';
import { Transacciones } from '../transacciones/transacciones';

@Component({
  selector: 'app-prestamos',
  imports: [Transacciones],
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

  prestamo={
    id:1,
    tipo:"vehicula",
    interes:10
  }

  mostrarMensaje(){
    this.estadoMensaje=!this.estadoMensaje;
  }
}
