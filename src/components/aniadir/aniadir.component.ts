import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Publisher, Hero } from '../interfaces/interfaces.component';
import { HeroresServices } from '../services/hero.services';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-aniadir',
  standalone: true,
  templateUrl: './aniadir.component.html',
  styleUrls: ['./aniadir.component.css'],
  styles: [],
  providers: [HeroresServices],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
})
export class AniadirComponent implements OnInit {
  heroForm = new FormGroup({
    id: new FormControl<string>(''),
    superhero: new FormControl<string>('', Validators.required),
    publisher: new FormControl<Publisher>(
      Publisher.DCComics,
      Validators.required
    ),
    alter_ego: new FormControl<string>('', Validators.required),
    first_appearance: new FormControl<string>('', Validators.required),
    characters: new FormControl<string>('', Validators.required),
    alt_img: new FormControl<string>(''),
  });

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  constructor(
    private heroService: HeroresServices,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  get currentHero(): Hero {
    return this.heroForm.value as Hero;
  }

  ngOnInit(): void {
    // Verificar si se está editando un héroe
    if (this.router.url.includes('edit')) {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
        .subscribe((hero) => {
          if (!hero) {
            this.router.navigateByUrl('/');
            return;
          }
          // Rellenar el formulario con los datos del héroe seleccionado
          this.heroForm.patchValue(hero);
        });
    }
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      // Actualizar el héroe existente
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackBar(`${hero.superhero} actualizado`);
        this.router.navigateByUrl('/'); // Redirigir después de la actualización
      });
      return;
    }

    // Crear un nuevo héroe
    this.heroService.addHero(this.currentHero).subscribe((hero) => {
      this.showSnackBar(`${hero.superhero} creado`);
      this.router.navigateByUrl('/'); // Redirigir después de crear
    });
  }

  onDeleteHero(): void {
    if (this.currentHero.id) {
      this.heroService.deleteHero(this.currentHero.id).subscribe(() => {
        this.showSnackBar(`${this.currentHero.superhero} borrado`);
        this.router.navigateByUrl('/'); // Redirigir después de borrar
      });
    }
  }

  showSnackBar(message: string): void {
    alert(message);
  }
}
