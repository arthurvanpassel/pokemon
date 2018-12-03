import * as React from 'react';
import Request from 'superagent';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import * as PokemonService from '../../services/pokemon.service';

export default class  Home extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
            person: [],
            pagenr: 0,
        };
    }

    componentWillMount() {
        var url = `https://pokeapi.co/api/v2/pokemon/?limit=30&offset=`+this.state.pagenr*30;
        Request.get(url).then((response) => {
            this.setState({
                people: response.body.results
            });
        });
    }

    addToFavorites(e, personName = "") {
        e.preventDefault();
        var urlFavo = `https://pokeapi.co/api/v2/pokemon/${personName}`;
        Request.get(urlFavo).then((response) => {
            this.sleep(500).then(() => {
                //var person = {firstName:"John", lastName:"Doe", age:46};
                var newFavo = { 
                    name:response.body.name,
                    height:response.body.height,
                    weight:response.body.weight,
                    types:response.body.types[0].type.name}
                PokemonService.add(newFavo).then(() =>
                                                 this.props.history.push('/favorieten'));
            })
        });

    }

    sleep (time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    clickNext() {
        this.state.pagenr++;
        this.componentWillMount()
    }
    clickPrev() {
        if (this.state.pagenr != 0) {
            this.state.pagenr--;
            this.componentWillMount()
        }
    }
    render() {
        var people = _.map(this.state.people, (people) => {
            var url = people.url;
            var ret = url.replace('https://pokeapi.co/api/v2/pokemon/','');
            ret = ret.replace('/','');
            var indexret = parseInt(ret);
            //console.log(ret);
            return (
                <li key={people.name}>
                    <Link to={`${/person/}${indexret}`}>
                        <h2>{people.name}</h2>
                    </Link>
                    <p>POKEDEX NR. {ret}</p>
                    <button onClick={ (e) => {this.addToFavorites(e, people.name)}}>Add to favorites</button>
                </li>)
        });
        return (
            <main class='home'>
                <h1>POKEMON</h1>
                <ul className="AllPeople">{people}</ul>
                <div class="button">
                    <button class="prev" onClick={(e) => {this.clickPrev(e)}}>PREVIOUS PAGE</button>
                    <button class="next" onClick={(e) => {this.clickNext(e)}}>NEXT PAGE</button>
                </div>
            </main> 
        )
    }
}