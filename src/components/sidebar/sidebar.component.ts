import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importar CommonModule
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  router: any;
  logout(): void {
    localStorage.removeItem('isAuthenticated'); // Limpia el estado de autenticación
    this.router.navigate(['/login']); // Redirige al login
  }
  sidebarItems = [
    { label: 'Listado', icon: 'label', url: './listado' },
    { label: 'Añadir', icon: 'add', url: './añadir' },
    { label: 'Buscar', icon: 'search', url: './buscador' },
  ];
}
