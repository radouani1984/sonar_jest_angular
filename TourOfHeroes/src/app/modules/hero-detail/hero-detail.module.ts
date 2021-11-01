import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule],
  exports: [HeroDetailComponent],
})
export class HeroDetailModule {}
