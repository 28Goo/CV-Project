import React from 'react'
import EducationalBackground from './Educational-Background'
import GeneralInformation from './General-Information'
import PracticalExperience from './Practical-Experience'

export default function Preview({ details, key }) {
    return(
        <section className='preview'>
            <GeneralInformation genInfo={details.generalInformation} />
            <PracticalExperience practicalExperience={details.practicalExperience} key={key} />
            <EducationalBackground educationalBackground={details.educationalBackground} key={key} />
        </section>
    );
}