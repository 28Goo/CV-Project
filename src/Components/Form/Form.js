import React from 'react';
import GeneralInformationForm from './General-Information-Form';

export default function Form({
    getFirstName, getLastName, getProfession, getAddress, getContactNumber, getEmail, getDescription
}) {
        return(
            <div className='form'>
                <GeneralInformationForm 
                    getFirstName={getFirstName}
                    getLastName={getLastName}
                    getProfession={getProfession}
                    getAddress={getAddress}
                    getContactNumber={getContactNumber}
                    getEmail={getEmail}
                    getDescription={getDescription}
                />
            </div>
        )    
};
