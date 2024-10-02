import { Routes } from '@angular/router';
import { ListadoComponent } from '../components/listado/listado.component';
import { AniadirComponent } from '../components/aniadir/aniadir.component';
import { BuscadorComponent } from '../components/buscador/buscador.component';
import { LoginComponent } from '../logs/login/login.component'; // Asegúrate de importar el componente de login
import { AuthGuard } from '../auth/auth.guard'; // Importa el guard

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirigir a login
  { path: 'login', component: LoginComponent }, // Ruta de login
  { path: 'listado', component: ListadoComponent, canActivate: [AuthGuard] }, // Ruta protegida
  { path: 'añadir', component: AniadirComponent, canActivate: [AuthGuard] },
  { path: 'edit/:id', component: AniadirComponent, canActivate: [AuthGuard] },
  { path: 'buscador', component: BuscadorComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }, // Redirigir a login si no se encuentra la ruta
];
