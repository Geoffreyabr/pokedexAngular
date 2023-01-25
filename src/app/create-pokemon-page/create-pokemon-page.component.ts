import { Component } from '@angular/core';
import { PokedexService } from '../pokedex.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pokemon-page',
  templateUrl: './create-pokemon-page.component.html',
  styleUrls: ['./create-pokemon-page.component.css']
})
export class CreatePokemonPageComponent {
  newPokemon = { name: '', url: '', description : '' };

  constructor(private service: PokedexService, private router : Router) {}

  onSubmit() {
    if (this.newPokemon.name && this.newPokemon.url && this.newPokemon.description) {
      this.service.addPokemon(this.newPokemon);
      this.router.navigate(['/']);
}
}}