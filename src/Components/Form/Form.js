import React from 'react';
import EducationalBackgroundForm from './Educational-Background-Form';
import GeneralInformationForm from './General-Information-Form';

export default function Form({ getGenInfo, getEducationalBackground, removeEducation, addEducation, key }) {
        return(
            <div className='form'>
                <GeneralInformationForm getGenInfo={getGenInfo} />
                <EducationalBackgroundForm 
                getEducationalBackground={getEducationalBackground}
                removeEducation={removeEducation}
                addEducation={addEducation}
                key={key}
                />
            </div>
        )    
};
