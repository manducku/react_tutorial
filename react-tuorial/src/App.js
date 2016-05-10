import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import Header from './Header';

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
                    <Header title={this.props.headerTitle}/>
                    <Content title={this.props.contentTitle}
                             body={this.props.contentBody} 
                        />
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
