import { Component } from '@angular/core';
import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { POKEMON } from 'src/app/shared/pokemon.class';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  @Input() pokemons: POKEMON[]= [];

  @Output() sendPokemonSelected: EventEmitter<any> = new EventEmitter();

  onPokemonClick(pokemon:any) {
    this.sendPokemonSelected.emit(pokemon);
   
  }

}
