import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CHeroesComponent } from './c-heroes/c-heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';

@NgModule({
  declarations: [CHeroesComponent],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
