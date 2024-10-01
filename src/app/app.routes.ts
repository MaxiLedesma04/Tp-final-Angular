import { Routes } from '@angular/router';
import { ListadoComponent } from '../components/listado/listado.component';
import { AniadirComponent } from '../components/aniadir/aniadir.component';
import { BuscadorComponent } from '../components/buscador/buscador.component';

export const routes: Routes = [
  { path: 'listado', component: ListadoComponent },
  { path: 'añadir', component: AniadirComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: '', redirectTo: '/listado', pathMatch: 'full' },
];
