import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CHeroesComponent } from './c-heroes/c-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: CHeroesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
