import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Publisher, Hero } from '../interfaces/interfaces.component';
import { HeroresServices } from '../services/hero.services';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-aniadir',
  standalone: true,
  templateUrl: './aniadir.component.html',
  styles: [],
  providers: [HeroresServices],
  imports: [],
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
    alt_img: new FormControl<string>('', Validators.required),
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
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroService.getHeroById(id)))
      .subscribe((hero) => {
        if (!hero) {
          // Manejar el caso en el que el héroe no existe
          this.router.navigateByUrl('/');
          return; // Detener la ejecución
        }
        this.heroForm.patchValue(hero);
      });
  }

  onSubmit(): void {
    if (this.heroForm.invalid) return;

    if (this.currentHero.id) {
      this.heroService.updateHero(this.currentHero).subscribe((hero) => {
        this.showSnackBar(`${hero.superhero} actualizado`);
      });
      return;
    }

    this.heroService.addHero(this.currentHero).subscribe((hero) => {
      this.showSnackBar(`${hero.superhero} creado`);
    });
  }

  showSnackBar(message: string): void {
    // Implementación de snackbar con alertas simples en lugar de Material
    alert(message); // Usar alert como alternativa a snackbar
  }

  // onDeleteHero(): void {
  //   // Aquí puedes implementar la lógica para borrar el héroe si es necesario
  //   // Por ejemplo, podrías pedir confirmación antes de borrar
  //   if (this.currentHero.id) {
  //     this.heroService.deleteHero(this.currentHero.id).subscribe(() => {
  //       this.showSnackBar(`${this.currentHero.superhero} borrado`);
  //       this.router.navigateByUrl('/'); // Redirigir después de borrar
  //     });
  //   }
  // }
}
