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
                education: {
                    id: uniqid(),
                    course: '',
                    school: '',
                    from: '',
                    to: '',
                }
            }],
            practicalExperience: [{
                experience: {

                }
            }],
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

    // getEducationBackground(e) {
    //     const { value } = e.target;
    //     this.setState({
    //         educationalBackground: {
    //             ...this.state.educationalBackground,
    //             ...this.state.educationalBackground.map((item) => {
    //                 if (item.education.id === e.target.parentElement.dataset.key)
    //                 return();
    //             }),
    //             [e.target.id]:value,
    //         }
    //     });
    //     console.log(this.state.educationalBackground);
    // }

    // removeEducation(e) {
    //     this.setState({

    //     });
    // }

    // addEducation(e) {
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