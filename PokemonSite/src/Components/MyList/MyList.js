import * as React from 'react';
import { Link } from 'react-router-dom';
import * as PokemonService from '../../services/pokemon.service';

export default class MyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    };
  }

  componentWillMount() {
      PokemonService.getAll().then(response => this.setState({ people: response.message }));
  }
  removeFromFavorites(e, removeName = "") {
    PokemonService.del(removeName).then(() => this.props.history.push('/'));
  }
  renderPeople() {
      return this.state.people.map((people, i) => (<li key={i}><people id={people.id} name={people.name} height={people.height} weight={people.weight} types={people.types} />
      <h2>{people.name}</h2>
      <p>height: {people.height} cm</p>
      <p>weight: {people.weight} kg</p>
      <p>types: {people.types}</p>
      <button onClick={ (e) => {this.removeFromFavorites(e, people.id)}}>Remove from favorites</button>
      <button><Link to={`/editPerson/${people.id}`}>Edit</Link></button>
      </li>));
  }
  render() {
    return (
      <main>
        <h1>My favorites</h1>
        <ul className='AllFavorites'>
        {this.state.people.length ? this.renderPeople() : (<p>Geen favorieten gevonden</p>)}
        </ul>
      </main>
    )
  }
}
