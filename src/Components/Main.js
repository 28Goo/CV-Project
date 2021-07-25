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
                description: '',
            },
            educationalBackground: {

            },
            practicalExperience: {

            },
        };
        
        this.getGeneralInfo = this.getGeneralInfo.bind(this);
    };
    
    getGeneralInfo(e) {
        const { id, value } = e.target;
        this.setState({
            generalInformation: {
                ...this.state.generalInformation,
                [id]: value,
            }
        });
    }

    render() {
        const { generalInformation } = this.state;

        return(
            <section>
                <Form 
                    getFirstName={this.getGeneralInfo}
                    getLastName={this.getGeneralInfo}
                    getProfession={this.getGeneralInfo}
                    getAddress={this.getGeneralInfo}
                    getContactNumber={this.getGeneralInfo}
                    getEmail={this.getGeneralInfo}
                    getDescription={this.getGeneralInfo}
                />
                <Preview
                    firstName={generalInformation.firstName}
                    lastName={generalInformation.lastName}
                    profession={generalInformation.profession}
                    address={generalInformation.address}
                    contactNumber={generalInformation.contactNumber}
                    email={generalInformation.email}
                    description={generalInformation.description}
                />
            </section>
        );
    }
}