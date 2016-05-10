import React from 'react';

class Content extends React.Component {
    render(){
        return(
                <div>
                    <h2>Content</h2>
                    <p>Helllo</p>
                    <p>
                        {this.props.title}
                        {this.props.body} 
                    </p>
                </div>
              );
    }
    
}

Content.propTypes = {
        title: React.PropTypes.string,
        body: React.PropTypes.string.isRequired,
    };

export default Content;
