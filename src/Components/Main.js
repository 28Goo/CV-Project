import React, { Component } from 'react'
import Form from './Form/Form';
import Preview from './Preview/Preview';

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            generalInformation: {
                firstName: '',
                lastName: '',
                profession: '',
                address: '',
                contactNumber: '',
                email: '',
                descrption: '',
            },
            educationalBackground: {

            },
            practicalExperience: {

            },
        };
        
        this.getFirstName = this.getFirstName.bind(this);
        this.getLastName = this.getLastName.bind(this);
        this.getProfession = this.getProfession.bind(this);
        this.getAddress = this.getAddress.bind(this);
        this.getContactNumber = this.getContactNumber.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getDescription = this.getDescription.bind(this);
    };

    getFirstName(e) {
        this.setState({
            generalInformation:{
                firstName: e.target.value,
                lastName: this.state.generalInformation.lastName,
                profession: this.state.generalInformation.profession,
                address: this.state.generalInformation.address,
                contactNumber: this.state.generalInformation.contactNumber,
                email: this.state.generalInformation.email,
                description: this.state.generalInformation.descrption,
            }
        });
        console.log(e.target.id);
    }

    getLastName(e) {
        this.setState({
            generalInformation: {
                firstName: this.state.generalInformation.firstName,
                lastName: e.target.value,
                profession: this.state.generalInformation.profession,
                address: this.state.generalInformation.address,
                contactNumber: this.state.generalInformation.contactNumber,
                email: this.state.generalInformation.email,
                description: this.state.generalInformation.descrption,
            }
        });
    } 

    getProfession(e) {
        this.setState({
            generalInformation: {
                firstName: this.state.generalInformation.firstName,
                lastName: this.state.generalInformation.lastName,
                profession: e.target.value,
                address: this.state.generalInformation.address,
                contactNumber: this.state.generalInformation.contactNumber,
                email: this.state.generalInformation.email,
                description: this.state.generalInformation.descrption,
            }
        });
    }

    getAddress(e) {
        this.setState({
            generalInformation: {
                firstName: this.state.generalInformation.firstName,
                lastName: this.state.generalInformation.lastName,
                profession: this.state.generalInformation.profession,
                address: e.target.value,
                contactNumber: this.state.generalInformation.contactNumber,
                email: this.state.generalInformation.email,
                description: this.state.generalInformation.descrption,
            }
        });
    } 

    getContactNumber(e) {
        this.setState({
            generalInformation: {
                firstName: this.state.generalInformation.firstName,
                lastName: this.state.generalInformation.lastName,
                profession: this.state.generalInformation.profession,
                address: this.state.generalInformation.address,
                contactNumber: e.target.value,
                email: this.state.generalInformation.email,
                description: this.state.generalInformation.descrption,
            }
        });
    } 

    getEmail(e) {
        this.setState({
            generalInformation: {
                firstName: this.state.generalInformation.firstName,
                lastName: this.state.generalInformation.lastName,
                profession: this.state.generalInformation.profession,
                address: this.state.generalInformation.address,
                contactNumber: this.state.generalInformation.contactNumber,
                email: e.target.value,
                description: this.state.generalInformation.descrption,
            }
        });
    } 

    getDescription(e) {
        this.setState({
            generalInformation: {
                firstName: this.state.generalInformation.firstName,
                lastName: this.state.generalInformation.lastName,
                profession: this.state.generalInformation.profession,
                address: this.state.generalInformation.address,
                contactNumber: this.state.generalInformation.contactNumber,
                email: this.state.generalInformation.email,
                descrption: e.target.value
            }
        });
    }

    render() {
        const { generalInformation } = this.state;

        return(
            <section>
                <Form 
                    getFirstName={this.getFirstName}
                    getLastName={this.getLastName}
                    getProfession={this.getProfession}
                    getAddress={this.getAddress}
                    getContactNumber={this.getContactNumber}
                    getEmail={this.getEmail}
                    getDescription={this.getDescription}
                />
                <Preview
                    firstName={generalInformation.firstName}
                    lastName={generalInformation.lastName}
                    profession={generalInformation.profession}
                    address={generalInformation.address}
                    contactNumber={generalInformation.contactNumber}
                    email={generalInformation.email}
                    description={generalInformation.descrption}
                />
            </section>
        );
    }
}