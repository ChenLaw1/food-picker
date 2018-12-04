import React, { Component } from 'react';
import { categories } from '../global/consts';
import { randomInt } from '../global/functions';
import './App.css';

const count = categories.length;

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      pick: randomInt(count)
    }

    this.randomize = this.randomize.bind(this);
  }

  randomize() {
    this.setState(
      {
        pick: randomInt(count)
      }
    )
  }

  render() {
    const { primary, secondary } = categories[this.state.pick];
    const secondaryPick = (secondary) ? secondary[randomInt(secondary.length)] : '...';
    const GOOGLE_SEARCH_URL = 'https://www.google.com/search?q='+
      primary.replace(' ','+') +
      ((secondary) ? '+' + secondaryPick.replace(' ','+') : '') +
      '+food+near+me';
    
    return (
      <div className="App">
        <h1>Food Picker</h1>
        <button className='randomizeBtn btn' onClick={this.randomize}>Random Pick</button>
        <hr />
        <div className='picks'>
        {primary}
        <br />
        {secondaryPick}
        </div>
        <hr />
        <a className='googleItBtn btn' href={GOOGLE_SEARCH_URL} rel="noopener noreferrer" target="_blank">Google It</a>
      </div>
    );
  }
}

export default App;
