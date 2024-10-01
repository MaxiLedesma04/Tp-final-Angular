import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; // Importar el módulo de MatCard
import { CommonModule } from '@angular/common'; // Importar CommonModule para usar ngFor

@Component({
  selector: 'app-listado',
  standalone: true, // Componente standalone
  imports: [MatCardModule, CommonModule], // Importar MatCardModule y CommonModule para ngFor
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
})
export class ListadoComponent {
  // Definición de datos para el listado
  heroes = [
    { id: 1, nombre: 'Superman' },
    { id: 2, nombre: 'Batman' },
    { id: 3, nombre: 'Wonder Woman' },
  ];
}
