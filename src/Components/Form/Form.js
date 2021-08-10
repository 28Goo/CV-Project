import React from 'react';
import EducationalBackgroundForm from './Educational-Background-Form';
import GeneralInformationForm from './General-Information-Form';
import PracticalExperienceForm from './Practical-Experience-Form';
import { GeneralFormTitle, EducationFormTitle, ExperienceFormTitle } from './Form-Titles';

export default function Form({ 
    getGeneralInput, 
    education, getEducationInput, addEducation, removeEducation,
    experience, getExperienceInput, addExperience, removeExperience 
}) {
        return(
            <section className='forms'>
                <GeneralFormTitle />
                <GeneralInformationForm getGeneralInput={getGeneralInput} />
                <ExperienceFormTitle />
                <PracticalExperienceForm
                    experience={experience}
                    getExperienceInput={getExperienceInput}
                    addExperience={addExperience}
                    removeExperience={removeExperience}
                />
                <EducationFormTitle />
                <EducationalBackgroundForm 
                    education={education}
                    getEducationInput={getEducationInput}
                    addEducation={addEducation}
                    removeEducation={removeEducation}
                />
            </section>
        )    
};
