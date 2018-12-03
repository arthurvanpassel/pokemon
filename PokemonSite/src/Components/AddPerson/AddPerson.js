import * as React from 'react';
import * as PokemonService from '../../services/pokemon.service';

export default class  AddPerson extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          person: {
              name: '',
              height: '',
              weight: '',
              types: '',
          }
      };
  }
  updateName(name) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            name: `${name}`,
        }
      });
      this.animationValiCheck();
  }
  updateHeight(height) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            height: `${height}`,
        }
      });
      this.animationValiCheck();
  }
  updateWeight(weight) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            weight: `${weight}`,
        }
      });
      this.animationValiCheck();
  }
  updateTypes(types) {
      this.setState({
        ...this.state,
        person: {
            ...this.state.person,
            types: `${types}`,
        }
      });
      this.animationValiCheck();
  }
  animationValiCheck() {
    var animValiIsCheck = true;
    if (this.state.person.name === "") {
      animValiIsCheck = false;
    }
    if (this.state.person.height === "") {
      animValiIsCheck = false;
    }
    if (this.state.person.weight === "") {
      animValiIsCheck = false;
    }
    if (this.state.person.types === "") {
      animValiIsCheck = false;
    }

    console.log(animValiIsCheck);
    if (animValiIsCheck === true) {
      //Change animObiWan
      this.ballon2AnimOn();
    }
    else if (animValiIsCheck === false) {
      //this.ballon3AnimOn();
    }
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
  onSubmit(e) {
    e.preventDefault();
    var ValiCheck = this.validationCheck();

    if (ValiCheck === true) {
      this.sleep(500).then(() => {
        PokemonService.add(this.state.person).then(() =>
        this.props.history.push('/favorieten'));
      })
    }
    else {
      this.ballon3AnimOn();
    }
  }
  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
  pika1AnimOn() {
    document.getElementById("pika1").classList.remove('hidePika');
    document.getElementById("pika1").classList.add('showPika');
    document.getElementById("pika2").classList.remove('showPika');
    document.getElementById("pika2").classList.add('hidePika');
    document.getElementById("pika3").classList.remove('showPika');
    document.getElementById("pika3").classList.add('hidePika');
    document.getElementById("pika4").classList.remove('showPika');
    document.getElementById("pika4").classList.add('hidePika');

  }
  pika2AnimOn() {
    document.getElementById("pika1").classList.remove('showPika');
    document.getElementById("pika1").classList.add('hidePika');
    document.getElementById("pika2").classList.remove('hidePika');
    document.getElementById("pika2").classList.add('showPika');
    document.getElementById("pika3").classList.remove('showPika');
    document.getElementById("pika3").classList.add('hidePika');
    document.getElementById("pika4").classList.remove('showPika');
    document.getElementById("pika4").classList.add('hidePika');

  }
  pika3AnimOn() {
    document.getElementById("pika1").classList.remove('showPika');
    document.getElementById("pika1").classList.add('hidePika');
    document.getElementById("pika2").classList.remove('showPika');
    document.getElementById("pika2").classList.add('hidePika');
    document.getElementById("pika3").classList.remove('hidePika');
    document.getElementById("pika3").classList.add('showPika');
    document.getElementById("pika4").classList.remove('showPika');
    document.getElementById("pika4").classList.add('hidePika');
  }
  pika4AnimOn() {
    document.getElementById("pika1").classList.remove('showPika');
    document.getElementById("pika1").classList.add('hidePika');
    document.getElementById("pika2").classList.remove('showPika');
    document.getElementById("pika2").classList.add('hidePika');
    document.getElementById("pika4").classList.remove('hidePika');
    document.getElementById("pika4").classList.add('showPika');
    document.getElementById("pika3").classList.remove('showPika');
    document.getElementById("pika3").classList.add('hidePika');
  }

ballon2AnimOn() {
    document.getElementById("pika1Ballon").classList.remove('showPika');
    document.getElementById("pika1Ballon").classList.add('hidePika');
    document.getElementById("pika2Ballon").classList.remove('hidePika');
    document.getElementById("pika2Ballon").classList.add('showPika');
    document.getElementById("pika3Ballon").classList.remove('showPika');
    document.getElementById("pika3Ballon").classList.add('hidePika');
}
ballon1AnimOn() {
    document.getElementById("pika1Ballon").classList.remove('hidePika');
    document.getElementById("pika1Ballon").classList.add('showPika');
    document.getElementById("pika2Ballon").classList.remove('showPika');
    document.getElementById("pika2Ballon").classList.add('hidePika');
    document.getElementById("pika3Ballon").classList.remove('showPika');
    document.getElementById("pika3Ballon").classList.add('hidePika');
}
ballon3AnimOn() {
    document.getElementById("pika3Ballon").classList.remove('hidePika');
    document.getElementById("pika3Ballon").classList.add('showPika');
    document.getElementById("pika2Ballon").classList.remove('showPika');
    document.getElementById("pika2Ballon").classList.add('hidePika');
    document.getElementById("pika1Ballon").classList.remove('showPika');
    document.getElementById("pika1Ballon").classList.add('hidePika');

}
  render() {
    return (
      <main>
        <h1>Add pokemon</h1>

        <div className="addPoke">
            <form action='' onSubmit={(e) => this.onSubmit(e)}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name firstInputForm" value={this.state.person.name} onFocus={this.pika1AnimOn.bind(this)} onChange={(e) => this.updateName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input type="text" name="height" id="height" value={this.state.person.height} onFocus={this.pika2AnimOn.bind(this)} onChange={(e) => this.updateHeight(e.target.value)} />
            </div>
            <div>
                <label htmlFor="naweighte">Weight: </label>
                <input type="text" name="weight" id="weight" value={this.state.person.weight} onFocus={this.pika3AnimOn.bind(this)} onChange={(e) => this.updateWeight(e.target.value)} />
            </div>
            <div>
                <label htmlFor="Home">Types: </label>
                <input type="text" name="Types" id="Types" value={this.state.person.types} onFocus={this.pika4AnimOn.bind(this)} onChange={(e) => this.updateTypes(e.target.value)} />
            </div>
            
              <button type="submit">Add</button>
            </form>
            <div className="pikaFormAnimation">
              <img src="images/Pikachu1.png" id="pika1" className="showPika"/>
              <img src="images/Pikachu2.png" id="pika2" className="hidePika"/>
              <img src="images/Pikachu3.png" id="pika3" className="hidePika"/>
              <img src="images/Pikachu4.png" id="pika4" className="hidePika"/>

              <img src="images/textBallonBlue.png" id="pika1Ballon"  className="showPika" />
              <img src="images/textBallonGreen.png" id="pika2Ballon"  className="hidePika" />
              <img src="images/textBallonRed.png" id="pika3Ballon"  className="hidePika" />
            </div>
        </div>
      </main>
    )
  }
}
