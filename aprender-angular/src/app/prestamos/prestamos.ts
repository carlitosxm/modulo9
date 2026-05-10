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

  
  mostrarMensaje(){
    if (!this.estadoMensaje){
      this.estadoMensaje=true;
    }else{
      this.estadoMensaje=false;
    }
  }
}
