import React from 'react';


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
    render(){
        return(
            <div>
                <ul>
                    {this.state.contactData.map((contactData, i) =>
                                                {return (<ContactInfo name={contactData.name} phonenumber={contactData.phonenumber} key={i} />
                                                );
                                                })}
                </ul>
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

export default Contacts;
