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
                                ],
                    selectedKey: -1,
                    selectedContact: {
                        name:"", phonenumber:""
                        }
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

    _onClick(contactKey){
        if(this.state.selectedKey === contactKey){
            console.log("Key select cancel");
            this.setState({
                selectedKey: -1
                });
            return;
        }
        else{
            this.setState({
                selectedKey: contactKey,
                selectedContact: this.state.contactData[contactKey]
            });
            console.log(contactKey+"is selected");
        }

   }

    _isSelected(contactKey){
        if(this.state.selectedKey === contactKey){
            console.log("True");
            return true;
        }
        else{
            console.log("False");
            return false;
        }
    }
    
    _removeContact(){
        if(this.state.selectedKey === -1){
            alert("not selected");
            return;
        }
        else{
            this.setState({
                contactData: update(
                    this.state.contactData,
                    {
                        $splice: [[this.state.selectedKey, 1]]
                    }
                ),
                selectedKey: -1
                });
        }
    }
    
    _modifiedContact(name, phonenumber){
        if(this.state.selectedKey === -1){
            alert("not selected");
            return;
        }
        else{
            this.setState({
                contactData: update(
                    this.state.contactData,
                    {
                        [this.state.selectedKey]:{
                                name:{ $set: name},
                                phonenumber:{ $set: phonenumber}
                            }
                    }
                )
            });
        }
    }


    render(){
        return(
            <div>
                <ul>
                    {this.state.contactData.map((contactData, i) =>
                            {return (<ContactInfo name={contactData.name} 
                                            phonenumber={contactData.phonenumber} 
                                            key={i} 
                                            contactKey={i}
                                            onClick={this._onClick.bind(this)}
                                            isSelected={this._isSelected.bind(this)(i)}
                                     />
                                                    );
                                         })}
                </ul>
                <ContactCreate onInsert={this._insertContact.bind(this)}/>
                <ContactRemove onRemove={this._removeContact.bind(this)}/>
                <ContactModified onModified={this._modifiedContact.bind(this)} contact={this.state.selectedContact}/>
            </div>
             );
    }
}

class ContactInfo extends React.Component{
       

        handleClick(){
            this.props.onClick(this.props.contactKey);
        }
        
        hadleSelect(){
            this.props.isSelected(this.props.contactKey);
        }

        render(){
         let getStyle = isSelected => {
            if(!isSelected)return;
            let style = {
                backgroundColor: '#123123'
            };
            return style;
         };

        return (
            <li style={getStyle(this.props.isSelected)} onClick={this.handleClick.bind(this)}> {this.props.name} {this.props.phonenumber} </li>
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

class ContactRemove extends React.Component{

    handleClick(){
        this.props.onRemove();
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick.bind(this)} >Remove Comment </button>
            </div>
        );
    }
}

class ContactModified extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:"",
            phonenumber:"",
        };
    }
    
    handleClick(){
        this.props.onModified(this.state.name, this.state.phonenumber);
    }

    handleChange(e){
        let newState = {};
        newState[e.target.name]=e.target.value;
        this.setState(newState);
    }
    
    componentWillReceiveProps(nextProps){
        this.setState({
            name: nextProps.contact.name,
            phonenumber: nextProps.contact.phonenumber
        });
    }
    
    render(){
        return (
            <div>
                <input type="text" name="name" placeholder="name" value={this.state.name} onChange={this.handleChange.bind(this)}/>
                <input type="text" name="phonenumber" placeholder="placeholder" value={this.state.phonenumber} onChange={this.handleChange.bind(this)}/>
                <button onClick={this.handleClick.bind(this)}>modified Comment </button>
            </div>
        );
    }
}

export default Contacts;
