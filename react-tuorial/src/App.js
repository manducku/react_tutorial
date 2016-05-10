import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Header from './Header';
import RandomNumber from './RandomNumber';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            value: Math.round(Math.random()*100)
        };

        this._updateValue = this._updateValue.bind(this);
    }

    _updateValue(randomValue){
        this.setState({
            value: randomValue
        });
    }

    render(){
    let text = "Dev-Server"
    let pStyle = {
        color: 'red',
        backgroundColor: 'black',
    }

        return (
                <div>
                    <Header title={this.props.headerTitle}/>
                    <Content title={this.props.contentTitle}
                             body={this.props.contentBody} 
                        />

                    <RandomNumber number={this.state.value}
                                  onUpdate={this._updateValue}/>
                </div>
               );
    }
}

    App.defaultProps = { 
        headerTitle: "welcome the header", 
        contentTitle: "uhmmmm",
        contentBody: "it`s content"
    }

ReactDOM.render(
        <App/>, document.getElementById('app')
        );
