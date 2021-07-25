import React from 'react'
import EducationalBackground from './Educational-Background'
import GeneralInformation from './General-Information'

export default function Preview({ details }) {
    return(
        <div>
            <GeneralInformation genInfo={details.generalInformation} />
            <EducationalBackground educationalBackground={details.educationalBackground} />
        </div>
    );
}