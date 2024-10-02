import { Component, OnInit } from '@angular/core';
import { HeroresServices } from '../services/hero.services';
import { Hero } from '../interfaces/interfaces.component';

@Component({
  selector: 'app-buscador',
  standalone: true,
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
  providers: [HeroresServices],
})
export class BuscadorComponent implements OnInit {
  heroes: Hero[] = [];
  filteredHeroes: Hero[] = [];

  constructor(private heroesService: HeroresServices) {}

  ngOnInit(): void {
    this.heroesService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
      this.filteredHeroes = heroes;
    });
  }

  onSearch(event: any): void {
    const query = event.target.value.toLowerCase();

    this.filteredHeroes = this.heroes.filter((hero) =>
      hero.superhero.toLowerCase().includes(query)
    );
  }
}
