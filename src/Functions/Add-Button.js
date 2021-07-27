import React from 'react';
import EducationalBackgroundForm from '../Components/Form/Educational-Background-Form';

export default function AddEducForm({
    getEducationalBackground, removeEducation, addEducation, educKey
}) {
    return(
        <EducationalBackgroundForm 
                getEducationalBackground={getEducationalBackground}
                removeEducation={removeEducation}
                addEducation={addEducation}
                educKey={educKey}
        />
    )
}