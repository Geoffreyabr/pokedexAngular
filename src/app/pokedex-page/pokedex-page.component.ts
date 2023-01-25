import { Component} from '@angular/core';
import { PokedexService } from '../pokedex.service';

@Component({
  selector: 'app-pokedex-page',
  templateUrl: './pokedex-page.component.html',
  styleUrls: ['./pokedex-page.component.css']
})
export class PokedexPageComponent {
  pokemonNewArray!:any;
  
  constructor(private service: PokedexService) {    
  }

  ngOnInit(){
    this.pokemonNewArray = this.service.showPokemons();
  }

  selectedPokemon!:any

  SelectedPok(event:any) {
    this.selectedPokemon = event;
  }
}
