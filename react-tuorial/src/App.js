import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    _sayHey(){
        alert("hey");
    }
    render(){
    let text = "Dev-Server"
    let pStyle = {
        color: 'red',
        backgroundColor: 'black',
    }

        return (
                <div>
                    <h1>Hello World</h1>
                    <h2> welcome to {text} </h2>
                    <button onClick={this._sayHey}>Click Me</button>
                    <p style = {pStyle}>{{text}? 'True' : 'False'}
                    </p>
                </div>
               );
    }
}

ReactDOM.render(
        <App />, document.getElementById('app')
        );
