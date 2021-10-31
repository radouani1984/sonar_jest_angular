import { Component, OnInit } from '@angular/core';
import { HEROES } from '@data/db';
import { Hero } from '@models/Hero';

@Component({
  selector: 'app-c-heroes',
  templateUrl: './c-heroes.component.html',
  styleUrls: ['./c-heroes.component.scss'],
})
export class CHeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor() {
    this.heroes = HEROES;
  }

  ngOnInit(): void {}
}
