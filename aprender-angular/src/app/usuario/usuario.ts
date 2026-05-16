import { Component } from '@angular/core';
import { UpperCasePipe, LowerCasePipe, DatePipe, TitleCasePipe, CurrencyPipe, JsonPipe } from '@angular/common';
import { Ventas } from '../ventas/ventas';
import { ɵEmptyOutletComponent } from "@angular/router";
import { Producto } from '../producto/producto';

@Component({
  selector: 'app-usuario',
  imports: [Ventas , UpperCasePipe, LowerCasePipe, DatePipe ,TitleCasePipe, CurrencyPipe, JsonPipe],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {

  web ="https://amazon.com"; 
  redirigir = false;
  marcasAutos=[
    {id:1, nombre:"Toyota"},
    {id:2, nombre:"Kia"},
    {id:3, nombre:"Chevrolet"},
    {id:4, nombre:"Suzuki"},
    {id:5, nombre:"Mazda"}];

  cambioRedireccion(){
    if(this.redirigir==false){
      this.redirigir=true;
    }else{
      this.redirigir=false;
    }
  }

  usuario={
    id:1,
    nombre:"Carlos Palacios",
    nick: "CarlosDev",
    rol:"user"
  };

  saldoCuenta: number = 2540.75; 
  fechaRegistro: Date = new Date();
  
  ngOnInit(){
    this.marcasAutos=[];
  }
}


