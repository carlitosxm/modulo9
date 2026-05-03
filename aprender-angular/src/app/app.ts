import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Producto } from './producto/producto';
import { miPerfil } from './mi-perfil/miPerfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Producto ,miPerfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenido ,este es mi nuevo proyecto de práctica');
}
