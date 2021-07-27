import React from 'react';
import EducationalBackgroundForm from './Educational-Background-Form';
import GeneralInformationForm from './General-Information-Form';

export default function Form({ getGenInfo, getEducationalBackground, removeEducation, addEducation, education }) {
        return(
            <section className='forms'>
                <GeneralInformationForm getGenInfo={getGenInfo} />
                <EducationalBackgroundForm 
                getEducationalBackground={getEducationalBackground}
                addEducation={addEducation}
                removeEducation={removeEducation}
                education={education}
                />
            </section>
        )    
};
