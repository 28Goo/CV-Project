import React from 'react';
import EducationalBackgroundForm from './Educational-Background-Form';
import GeneralInformationForm from './General-Information-Form';

export default function Form({ getGenInfo, getEducationalBackground }) {
        return(
            <div className='form'>
                <GeneralInformationForm getGenInfo={getGenInfo} />
                <EducationalBackgroundForm getEducationalBackground={getEducationalBackground} />
            </div>
        )    
};
