import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  currentLoc() {
    var currentLocation = this.props.location.pathname;
    return currentLocation;
  }
  render() {
    return (
      <header>
        <div>
          <div className='headerBanner'>
          </div>
          <nav>
            <ul>
              <li className={this.currentLoc() === '/' ? 'active home' : 'home'}><Link to="/">Home</Link></li>
              <li className={this.currentLoc() === '/favorieten' ? 'active favorites' : 'favorites'}><Link to="/favorieten">My favorites</Link></li>
              <li className={this.currentLoc() === '/addPerson' ? 'active addPerson' : 'addPerson'}><Link to="/addPerson">Add pokemon</Link></li>
              <li className={this.currentLoc() === '/animation' ? 'active animation' : 'animation'}><Link to="/animation">Loading animation</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
};
