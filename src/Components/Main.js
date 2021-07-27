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
                id: uniqid(),
                position: '',
                company: '',
                description: '',
                from: '',
                to: '',
            }],
        };
        
        this.getGeneralInput = this.getGeneralInput.bind(this);
        this.getEducationInput = this.getEducationInput.bind(this);
        this.addEducation = this.addEducation.bind(this);
        this.removeEducation = this.removeEducation.bind(this);
        this.getExperienceInput = this.getExperienceInput.bind(this);
        this.addExperience = this.addExperience.bind(this);
        this.removeExperience = this.removeExperience.bind(this);
    };
    
    //  GENERAL METHOD
    getGeneralInput(e) {
        const { id, value } = e.target;
        this.setState({
            generalInformation: {
                ...this.state.generalInformation,
                [id]: value,
            }
        });
        console.log(this.state);
    }

    // EDUCATION METHODS
    getEducationInput(e) {
        const { value } = e.target;
        const { key } = e.target.dataset;
        const { index } = e.target.parentElement.dataset;

        let education = this.state.educationalBackground;
        education[index][key] = value;

        this.setState({
            educationalBackground: [
                ...education
            ]
        });
        console.log(this.state.educationalBackground);
    }

    addEducation() {
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

    // EXPERIENCE METHODS
    getExperienceInput(e) {
        const { value } = e.target;
        const { key } = e.target.dataset;
        const { index } = e.target.parentElement.dataset;

        let experience = this.state.practicalExperience;
        experience[index][key] = value;

        this.setState({
            practicalExperience: [
                ...experience
            ]
        });
        console.log(this.state.practicalExperience);
    }

    addExperience() {
        this.setState({
            practicalExperience: this.state.practicalExperience.concat([{
                id: uniqid(),
                position: '',
                company: '',
                description: '',
                from: '',
                to: '',
            }])
        });
    }

    removeExperience(e) {
        if (this.state.practicalExperience.length === 1) return;
        const { key } = e.target.parentElement.dataset;
        this.setState({
            practicalExperience: [ 
                ...this.state.practicalExperience.filter(experience => {
                    return experience.id !== key;
                })
            ]
        });
    }

    printCV() {
        window.print();
    }

    render() {
        const { educationalBackground, practicalExperience } = this.state;
        return(
            <section className='main'>
                <Form 
                    getGeneralInput={this.getGeneralInput}
                    getEducationInput={this.getEducationInput}
                    addEducation={this.addEducation}
                    removeEducation={this.removeEducation}
                    education={educationalBackground}
                    experience={practicalExperience}
                    getExperienceInput={this.getExperienceInput}
                    addExperience={this.addExperience}
                    removeExperience={this.removeExperience}
                />
                <Preview
                    details={this.state}
                    printCV={this.printCV}
                />
            </section>
        );
    }
}