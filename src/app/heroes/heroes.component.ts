import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock.heroes';

import { HeroService } from '../hero.service';

/*Decorador en Angular! */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
/*cualquier cosa dentro de esta clase se cargará AL INICIO de la carga de la página cualquier funcion , clase,etc*/
export class HeroesComponent implements OnInit {

  /*hero: Hero = {id: 1, name: 'Windstorm'};*/
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
  this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

    onSelect(hero: Hero) {
      this.selectedHero = hero;
      console.log(this.selectedHero);
    }

}
