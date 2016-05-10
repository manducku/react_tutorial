import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {

  _update(){
      let value = Math.round(Math.random()*100);
      this.props.onUpdate(value);
  }
  constructor(props){
      super(props);
      this._update = this._update.bind(this);
  } 

  render(){
      return (
              <div>
                <h1> Random Number: {this.props.number}</h1>
                <button onClick={this._update}>Radomize</button>
              </div>
             );
  }
}

export default RandomNumber;
