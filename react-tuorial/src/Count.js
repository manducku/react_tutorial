import React from 'react';
import ReactDOM from 'react-dom';

class Count extends React.Component{

   _update(){
            let value = this.props.number +1;
            this.props.onUpdate(value);
        }

    constructor(props){
            super(props);
            this._update=this._update.bind(this);
        }

    render(){
        return (
            <div>
                <h1>{this.props.number}</h1>
                <button onClick={this._update}>Count</button>
            </div>
            );
    }
}
export default Count;
