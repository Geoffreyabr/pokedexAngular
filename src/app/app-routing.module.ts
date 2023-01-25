import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexPageComponent } from './pokedex-page/pokedex-page.component'
import { CreatePokemonPageComponent } from './create-pokemon-page/create-pokemon-page.component';

const routes: Routes = [
  {path:'', component: PokedexPageComponent},
  { path:'create', component : CreatePokemonPageComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
