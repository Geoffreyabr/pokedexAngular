import { Injectable } from '@angular/core';
import { pokemons } from './shared/pokemons-mock';
import { POKEMON } from './shared/pokemon.class';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  constructor() { }

  pokemonsArray = pokemons

  showPokemons() {
    return this.pokemonsArray;
  }

  addPokemon(pokemon:POKEMON) {
    this.pokemonsArray.push(pokemon);
  }
}
