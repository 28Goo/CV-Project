import React from 'react';
import EducationalBackgroundForm from './Educational-Background-Form';
import GeneralInformationForm from './General-Information-Form';
import PracticalExperienceForm from './Practical-Experience-Form';

export default function Form({ 
    getGeneralInput, 
    education, getEducationInput, addEducation, removeEducation,
    experience, getExperienceInput, addExperience, removeExperience 
}) {
        return(
            <section className='forms'>
                <GeneralInformationForm getGeneralInput={getGeneralInput} />
                <EducationalBackgroundForm 
                    education={education}
                    getEducationInput={getEducationInput}
                    addEducation={addEducation}
                    removeEducation={removeEducation}
                />
                <PracticalExperienceForm
                    experience={experience}
                    getExperienceInput={getExperienceInput}
                    addExperience={addExperience}
                    removeExperience={removeExperience}
                />
            </section>
        )    
};
