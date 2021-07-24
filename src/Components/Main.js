import React, { Component } from 'react'

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
                firstName: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    }

    getLastName(e) {
        this.setState({
            generalInformation: {
                lastName: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    } 

    getProfession(e) {
        this.setState({
            generalInformation: {
                profession: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    }

    getAddress(e) {
        this.setState({
            generalInformation: {
                address: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    } 

    getContactNumber(e) {
        this.setState({
            generalInformation: {
                contactNumber: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    } 

    getEmail(e) {
        this.setState({
            generalInformation: {
                email: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    } 

    getDescription(e) {
        this.setState({
            generalInformation: {
                descrption: e.target.value
            }
        });
        console.log(this.state.generalInformation);
    }
}