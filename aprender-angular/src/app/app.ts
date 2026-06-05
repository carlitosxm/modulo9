import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { Producto } from './components/producto/producto';
import { miPerfil } from './components/mi-perfil/miPerfil';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { config } from './models/config';
import { Cine } from './components/cine/cine';
import { Padre } from "./components/padre/padre";
import { Hijo } from "./components/hijo/hijo";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Producto, miPerfil, Usuario, Ventas, Cine, Padre, Hijo, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenido ,este es mi nuevo proyecto de práctica');
  titulo = config.title;
  descripcion=config.description;
}
