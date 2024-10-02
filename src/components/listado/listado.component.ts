import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HeroresServices } from '../services/hero.services'; // Servicio actualizado
import { Hero } from '../interfaces/interfaces.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css'],
  imports: [CommonModule, MatCardModule, HttpClientModule, RouterModule],
})
export class ListadoComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroresServices) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    });
  }
}
