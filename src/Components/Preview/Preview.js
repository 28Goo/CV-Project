import React from 'react'
import EducationalBackground from './Educational-Background'
import GeneralInformation from './General-Information'
import PracticalExperience from './Practical-Experience'
import PrintCV from './PrintCV'

export default function Preview({ details, key, printCV }) {
    return(
        <section className='preview'>
            <GeneralInformation genInfo={details.generalInformation} />
            <EducationalBackground educationalBackground={details.educationalBackground} key={key} />
            <PracticalExperience practicalExperience={details.practicalExperience} key={key} />
            <PrintCV printCV={printCV} />
        </section>
    );
}