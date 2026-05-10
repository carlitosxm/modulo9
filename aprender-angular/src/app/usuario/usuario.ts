import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
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

  ngOnInit(){
    this.marcasAutos=[];
  }
}


