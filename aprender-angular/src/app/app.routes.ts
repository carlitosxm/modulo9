import { Routes } from '@angular/router';
import { Producto } from './components/producto/producto';
import { Cine } from './components/cine/cine';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Pelicula } from './components/pelicula/pelicula';
import { Padre } from './components/padre/padre';
import { miPerfil } from './components/mi-perfil/miPerfil';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';
import { PaginaNoEncontrada } from './components/pagina-no-encontrada/pagina-no-encontrada';

export const routes: Routes = [
   /* {path:"", component: Producto},
    {path:"inicio", component: Producto},
    {path:"componentes", component: Producto},
    {path:"ciclo", component: Pelicula},
    {path:"plantillas", component: Usuario},
    {path:"directivas", component: Ventas},
    {path:"modelos", component: Cine},
    {path:"comunicacion", component: Padre},
    */
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  
    // 2. Rutas de tus componentes
    { path: 'inicio', component: miPerfil },
    { path: 'cuenta', component: Cuenta },
    { path: 'transacciones', component: Transacciones },
    { path: 'prestamos', component: Prestamos },
    
    // 3. Ruta comodín para cualquier otra página no existente
    { path: '**', component: PaginaNoEncontrada }
];
