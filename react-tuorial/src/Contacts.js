import React from 'react';
import update from 'react-addons-update';


class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                    contactData: [
                            {name:"hanwoolKim", phonenumber:"01071500543"},
                            {name:"hanseam", phonenumber:"01054222183"},
                            {name:"yoonjung", phonenumber:"01078853333"}
                                ] 
                    }
    }

    _insertContact(name, phonenumber){
        let newState = update(this.state, {
            contactData: {
                    $push: [{name:name, phonenumber: phonenumber}]
            }
        });
        this.setState(newState);
    }
    render(){
        return(
            <div>
                <ul>
                    {this.state.contactData.map((contactData, i) =>
                                                {return (<ContactInfo name={contactData.name} phonenumber={contactData.phonenumber} key={i} />
                                                );
                                         })}
                </ul>
                <ContactCreate onInsert={this._insertContact.bind(this)}/>
            </div>
             );
    }
}

class ContactInfo extends React.Component{
        render(){
        return (
            <li> {this.props.name} {this.props.phonenumber} </li>
            );
            }
}

class ContactCreate extends React.Component{

    constructor(props){
            super(props);
            this.state = {
                name: "",
                phonenumber: ""
            };
        }
    
    handleChange(e){
        var nextState = {};
        nextState[e.target.name]= e.target.value;
        console.log(e.target.name, e.target.value);
        this.setState(nextState);
    }

    handleClick(e){
        this.props.onInsert(this.state.name, this.state.phonenumber);
        this.setState({
            name:"",
            phonenumber:""
        });
    }

    render(){
            return ( 
                <div>
                    <p>
                        <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                        <input type="text" name="phonenumber" placeholder="phonenumber" value={this.state.phonenumber} onChange={this.handleChange.bind(this)}/>
                        <button onClick={this.handleClick.bind(this)}>
                            Insert
                        </button>
                    </p> 
                </div>
            );
    }
}

export default Contacts;
