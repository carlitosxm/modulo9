import { Component } from '@angular/core';
import { Ventas } from '../ventas/ventas';

@Component({
  selector: 'app-usuario',
  imports: [Ventas],
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
  
  ngOnInit(){
    this.marcasAutos=[];
  }
}


