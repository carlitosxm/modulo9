import { Component } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-cuenta',
  imports: [],
  templateUrl: './cuenta.html',
  styleUrl: './cuenta.css',
})
export class Cuenta {

  public clientes:Array<Cliente>;

  constructor(){
    this.clientes=[
      new Cliente(101, 'Carlos', 'Palacios', 'carlos.palacios@email.com', 1500.50),
      new Cliente(102, 'Ana', 'Martínez', 'ana.mtz@email.com', 2800.00),
      new Cliente(103, 'Juan', 'Cueva', 'juan.cueva@email.com', 450.75)
    ]
  }
  

  ngOnInit(){
    console.log("Componente ARRANCANDO");
  }
  ngOnDestroy(){
    console.log("Compoenente Eliminado")
  }
}
