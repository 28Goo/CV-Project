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
                course: '',
                school: '',
                from: '',
                to: '',
            },
            practicalExperience: {

            },
        };
        
        this.getGeneralInfo = this.getGeneralInfo.bind(this);
        this.getEducationBackground = this.getEducationBackground.bind(this);
        this.addEducation = this.addEducation.bind(this);
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

    getEducationBackground(e) {
        const { id, value } = e.target;
        this.setState({
            educationalBackground: {
                ...this.state.educationalBackground,
                [id]:value,
            }
        });
    }

    //  TO DO
    //     addEducation(e) {
    //     e.preventDefault();
    //     this.setState({

    //     });
    // }
    

    render() {
        return(
            <section>
                <Form 
                    getGenInfo={this.getGeneralInfo}
                    getEducationalBackground={this.getEducationBackground}
                />
                <Preview
                    details={this.state}
                />
            </section>
        );
    }
}