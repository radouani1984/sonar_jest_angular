import { Component } from '@angular/core';
import { HEROES } from '@data/db';
import { Hero } from '@models/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  topHeroes: Hero[] = [];

  constructor() {
    this.topHeroes = HEROES.slice(5);
  }
}
