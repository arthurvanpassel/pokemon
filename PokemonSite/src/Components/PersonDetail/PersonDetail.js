import * as React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class  PersonDetail extends React.Component {
  constructor() {
    super();
    this.state = {name: '',
                height: '',
                weight: '',
                 types: ''};
  }

  componentWillMount() {
    var location = this.props.location.pathname;
    var detailName = location.substring(8);
      console.log(detailName);
      
    var urlPeople = `https://pokeapi.co/api/v2/pokemon/` + detailName;
    Request.get(urlPeople).then((response) => {
      this.setState({
        name: response.body.name,
        weight: response.body.weight,
        height: response.body.height,
        types: response.body.types[0].type.name,
      });
    });
      console.log(this.state.name);
  }
  render() {
    return (
      <main className="OnePokemon">
        <div>
            <h2>{this.state.name}</h2>
            <ul className='otherInfo'>
              <li>Height: {this.state.height} cm</li>
              <li>Weight: {this.state.weight} kg</li>
              <li>Types: {this.state.types}</li>
            </ul>
        </div>
      </main>
    )
  }
}
