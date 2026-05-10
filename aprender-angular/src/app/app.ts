import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './producto/producto';
import { miPerfil } from './mi-perfil/miPerfil';
import { Usuario } from './usuario/usuario';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Producto ,miPerfil, Usuario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenido ,este es mi nuevo proyecto de práctica');
}
