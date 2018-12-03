import React, { Component } from 'react';
import { Route } from 'react-router';
import './App.css';
import { HashRouter as Router} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import MyList from './Components/MyList/MyList';
import PersonDetail from './Components/PersonDetail/PersonDetail';
import AddPerson from './Components/AddPerson/AddPerson';
import EditPerson from './Components/EditPerson/EditPerson';
import Animation from './Components/Animation/Animation';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='*' component={Header} />
        <Route exact path='/' component={Home} />
        <Route exact path='/favorieten' component={MyList} />
        <Route exact path='/person/:name' component={PersonDetail} />
        <Route exact path='/addPerson' component={AddPerson} />
        <Route exact path='/editPerson/:name' component={EditPerson} />
        <Route exact path='/animation' component={Animation} />
      </div>
    );
  }
}

export default App;
