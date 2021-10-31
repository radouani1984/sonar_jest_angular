import { Component, OnInit } from '@angular/core';
import { HEROES } from '@data/db';
import { Hero } from '@models/Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[] = [];

  constructor() {
    this.topHeroes = HEROES.slice(5);
  }

  ngOnInit(): void {}
}
