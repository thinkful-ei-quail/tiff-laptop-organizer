import React, { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Summary from './components/Summary';
import selected from './selected';
import './App.css';

class App extends Component {
  state = {
    selected: selected
  };


  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

   render () {
     const {selected} = this.state
    return (
      <div className="App">
        <Header />
        <main>
            <Main
              selected={selected}
              updateFeature={this.updateFeature}
            />
            <Summary
              selected={selected}
            />
        </main>
      </div>
    );
  }
}

export default App;