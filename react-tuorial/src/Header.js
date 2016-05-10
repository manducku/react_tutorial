import React from 'react';

class Header extends React.Component {
    render(){
        return (
                <h1>Header {this.props.title}</h1>
               );
    }
}

Header.defaultProps = {
    title: "it`s new"
}

export default Header;
