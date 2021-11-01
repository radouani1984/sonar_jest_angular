import { Component } from '@angular/core';
import { HEROES } from '@data/db';
import { Hero } from '@models/Hero';

@Component({
  selector: 'app-c-heroes',
  templateUrl: './c-heroes.component.html',
  styleUrls: ['./c-heroes.component.scss'],
})
export class CHeroesComponent {
  heroes: Hero[] = [];

  constructor() {
    this.heroes = HEROES;
  }
}
