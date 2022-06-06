import './App.css';
import React, {Component} from 'react';

export default class App extends Component {
  state = {
    pokemon1_name: 'Pikachu',
    pokemon1_hp: 100,
    pokemon1_image: "https://w7.pngwing.com/pngs/363/241/png-transparent-pokemon-pikachu-illustration-pikachu-ash-ketchum-pokxe9mon-cartoon-pikachu-orange-material-pokxe9mon-thumbnail.png",

    pokemon2_name: 'Bulbasaur',
    pokemon2_hp: 120,
    pokemon2_image: "https://w7.pngwing.com/pngs/957/190/png-transparent-green-pokemon-character-pokemon-red-and-blue-ash-ketchum-bulbasaur-wikia-pokemon-marine-mammal-mammal-vertebrate-thumbnail.png",

    status: '',
    damage: 10
  }

  handleAttackToPokemon1 = () => {
    this.setState(state => ({
      pokemon1_hp: this.state.pokemon1_hp - this.state.damage,
      status: 'Pikachu just took damage'
    }))
  }

  handleAttackToPokemon2 = () => {
    this.setState(state => ({
      pokemon2_hp: this.state.pokemon2_hp - this.state.damage,
      status: 'Bulbasaur just took damage'
    }))
  }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
              <th className="hp">HP: <br/> {this.state.pokemon1_hp}</th>
              <th className="hp">HP: <br/> {this.state.pokemon2_hp}</th>
          </tr>
          <tr>
              <td className="name">{this.state.pokemon1_name}</td>
              <td className="name">{this.state.pokemon2_name}</td>
          </tr>
          <tr>
              <td><img src={this.state.pokemon1_image}/></td>
              <td><img src={this.state.pokemon2_image}/></td>
          </tr>
          <tr>
              <td><button onClick={this.handleAttackToPokemon2}>ATTACK</button></td>
              <td><button onClick={this.handleAttackToPokemon1}>ATTACK</button></td>
          </tr>
        </table>
        <h1 className="status">STATUS: {this.state.status} </h1>
      </div>
    );
  }
}

