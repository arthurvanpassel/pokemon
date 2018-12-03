import * as React from 'react';
import * as PokemonService from '../../services/pokemon.service';
import Request from 'superagent';
import _ from 'lodash';

export default class  EditPerson extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          person: {
              name: '',
              height: '',
              weight: '',
              types: '',
          },
      };
  }
  componentWillMount() {
    var currLocation = this.props.location.pathname;
    var PersonId = currLocation.substring(12);

    PokemonService.get(PersonId).then(response => this.setState({ person: response.message }));
  }
  updateName(name) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            name: `${name}`,
        }
      });
  }
  updateHeight(height) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            height: `${height}`,
        }
      });
  }
  updateWeight(weight) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            weight: `${weight}`,
        }
      });
  }
  updateTypes(types) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            types: `${types}`,
        }
      });
  }
  validationCheck() {
    var valiIsCheck = true;
    if (this.state.person.name === "") {
      valiIsCheck = false;
    }
    if (this.state.person.height === "") {
      valiIsCheck = false;
    }
    if (this.state.person.weight === "") {
      valiIsCheck = false;
    }
    if (this.state.person.types === "") {
      valiIsCheck = false;
    }
    return valiIsCheck;
  }
  onSubmit(e,  editId = "") {
    e.preventDefault();
    var ValiCheck = this.validationCheck();

    if (ValiCheck === true) {
      this.sleep(500).then(() => {
        PokemonService.update(editId, this.state.person).then(() => this.props.history.push('/favorieten'));
      })
    }
  }
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  render() {
    return (
      <main>
        <h1>Edit pokemon</h1>

        <form action='' onSubmit={(e) => this.onSubmit(e, this.state.person.id)}>
        <div>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" id="name" value={this.state.person.name} onChange={(e) => this.updateName(e.target.value)} />
        </div>
        <div>
            <label htmlFor="height">height: </label>
            <input type="text" name="height" id="height" value={this.state.person.height} onChange={(e) => this.updateHeight(e.target.value)} />
        </div>
        <div>
            <label htmlFor="naweighte">weight: </label>
            <input type="text" name="weight" id="weight" value={this.state.person.weight} onChange={(e) => this.updateWeight(e.target.value)} />
        </div>
        <div>
            <label htmlFor="Types">Types: </label>
            <input type="text" name="Types" id="Types" value={this.state.person.types} onChange={(e) => this.updateTypes(e.target.value)} />
        </div>

          <button type="submit">Edit</button>
        </form>
      </main>
    )
  }
}
