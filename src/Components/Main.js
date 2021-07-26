import React, { Component } from 'react';
import uniqid from 'uniqid';
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
            educationalBackground: [{
                    id: uniqid(),
                    course: '',
                    school: '',
                    from: '',
                    to: '',
            }],
            practicalExperience: [{
            }],
        };
        
        this.getGeneralInfo = this.getGeneralInfo.bind(this);
        this.getEducationBackground = this.getEducationBackground.bind(this);
    };
    
    getGeneralInfo(e) {
        const { id, value } = e.target;
        this.setState({
            generalInformation: {
                ...this.state.generalInformation,
                [id]: value,
            }
        });
        console.log(this.state);
    }

    getEducationBackground(e) {
        const { value, dataset } = e.target;
        this.setState({
            educationalBackground: {
                ...this.state.educationalBackground,
                ...this.state.educationalBackground.filter(item => {
                    item.id = 
                })
            }
            
        });
        console.log(this.state.educationalBackground);
    }

    removeEducation(e) {
        this.setState({

        });
    }

    addEducation(e) {
        e.preventDefault();
        this.setState({

        });
    }
    

    render() {
        return(
            <section>
                <Form 
                    getGenInfo={this.getGeneralInfo}
                    getEducationalBackground={this.getEducationBackground}
                    removeEducation={this.removeEducation}
                    addEducation={this.addEducation}
                />
                <Preview
                    details={this.state}
                />
            </section>
        );
    }
}