import { Routes } from '@angular/router';
import { ListadoComponent } from '../components/listado/listado.component';
import { AniadirComponent } from '../components/aniadir/aniadir.component';
import { BuscadorComponent } from '../components/buscador/buscador.component';

export const routes: Routes = [
  { path: '', redirectTo: 'listado', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'listado', component: ListadoComponent }, // Ruta principal
  { path: 'añadir', component: AniadirComponent }, // Ruta para agregar héroes
  { path: 'edit/:id', component: AniadirComponent }, // Ruta para editar héroes con el parámetro id
  { path: 'buscador', component: BuscadorComponent }, // Ruta para el buscador
  { path: '**', redirectTo: 'listado' }, // Redireccionar cualquier ruta no encontrada a 'listado'
];
