import * as React from 'react';

export default class  Home extends React.Component {
  render() {
    return (
      <main>
      <div className="loadingAnim" id="loadingAnim">
        <img src="images/pokeball1.png" alt=""/>
        <img src="images/pokeball2.png" alt=""/>
        <img src="images/pokeball3.png" alt=""/>
      </div>
      <div className="loadingText" id="loadingText">
        <h1>loading...</h1>
      </div>
      </main>
    )
  }

}
