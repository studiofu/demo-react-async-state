import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife:47
    }
  }

  // the set state is asynchronize
  handleClick = (e) => {
    // let count = this.state.meaningOfLife;
    // this.setState({meaningOfLife: count + 1});
    this.setState((prevState, prevProps) => {
      return {meaningOfLife: prevState.meaningOfLife + prevProps.increment}
    },
      () => {console.log(this.state.meaningOfLife)}
    )
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            {this.state.meaningOfLife}
          </p>
          <button onClick={this.handleClick}>
            update
          </button>
        </header>
      </div>
    );
  }
}

export default App;
