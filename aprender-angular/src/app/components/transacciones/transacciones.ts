import { Component } from '@angular/core';
import { Transaccion } from '../../models/transaccion';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transacciones',
  imports: [FormsModule],
  templateUrl: './transacciones.html',
  styleUrl: './transacciones.css',
})
export class Transacciones {
   public transaccionesList:Array<Transaccion>;
   public descripcionTransaccion:string = "";
   public monto:string="";

  constructor() {
    // Inicializamos con 6 objetos de ejemplo usando 'new'
    this.transaccionesList = [
      new Transaccion(1, new Date('2026-05-10'), 'Depósito de Sueldo', 1200.00, 'ingreso'),
      new Transaccion(2, new Date('2026-05-11'), 'Pago de Arriendo', 350.00, 'egreso'),
      new Transaccion(3, new Date('2026-05-12'), 'Compra de Supermercado', 85.50, 'egreso'),
      new Transaccion(4, new Date('2026-05-14'), 'Venta de artículo usado', 50.00, 'ingreso'),
      new Transaccion(5, new Date('2026-05-15'), 'Suscripción Netflix', 10.99, 'egreso'),
      new Transaccion(6, new Date('2026-05-16'), 'Transferencia Recibida', 120.00, 'ingreso')
    ];
  }

  ngDoCheck(){
    console.log(this.descripcionTransaccion);
  }

  mostrarValor(){
    this.monto = this.descripcionTransaccion;
  }
}
