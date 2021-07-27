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
            },],
            practicalExperience: [{
            }],
        };
        
        this.getGeneralInfo = this.getGeneralInfo.bind(this);
        this.getEducationBackground = this.getEducationBackground.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
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
        const { id, value } = e.target;
        this.setState({
            educationalBackground: [
                ...this.state.educationalBackground,
                {
                    ...this.state.educationalBackground.map(info => {
                        return(info[id] = value)
                    })
                }
            ]
        });
        console.log(this.state.educationalBackground[0]);
    }

    addEducation(e) {
        this.setState({
            educationalBackground: this.state.educationalBackground.concat([{
                id: uniqid(),
                course: '',
                school: '',
                from: '',
                to: '',
            }])
        });
    }

    removeEducation(e) {
        if (this.state.educationalBackground.length === 1) return
        const { key } = e.target.parentElement.dataset;
        this.setState({
            educationalBackground: [
                ...this.state.educationalBackground.filter(info => {
                        return info.id !== key;
                })
            ]
        });
    }

    render() {
        return(
            <section className='main'>
                <Form 
                    getGenInfo={this.getGeneralInfo}
                    getEducationalBackground={this.getEducationBackground}
                    addEducation={this.addEducation}
                    removeEducation={this.removeEducation}
                    education={this.state.educationalBackground}
                />
                <Preview
                    details={this.state}
                />
            </section>
        );
    }
}