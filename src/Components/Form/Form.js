import React from 'react';
import GeneralInformationForm from './General-Information-Form';

export default function Form() {
        return(
            <div className='form'>
                <GeneralInformationForm 
                    getFirstName={this.getFirstName}
                    getLastName={this.getLastName}
                    getProfession={this.getProfession}
                    getAddress={this.getAddress}
                    getContactNumber={this.getContactNumber}
                    getEmail={this.getEmail}
                    getDescription={this.getDescription}
                />
            </div>
        )    
};
