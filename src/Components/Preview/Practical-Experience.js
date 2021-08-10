import React from 'react'

export default function PracticalExperience ({ practicalExperience }) {
    return(
        <div className='practicalExperience'>
            <h1 className='experienceTitle previewTitle'>Experience</h1>
            {
                practicalExperience.map(experience => {
                    return(
                        <div className='experiences' key={experience.id}>
                            <div className='experienceDetails'>
                                <div className='companyDetails'>
                                    <p className='position experiencePreview'>{experience.position}</p>
                                    <p className='experiencePreview'>-</p>
                                    <p className='company experiencePreview'>{experience.company}</p>
                                </div>
                                <p className='description experiencePreview'>{experience.description}</p>
                                <div className='experienceDate'>
                                    <p className='experienceFrom experiencePreview'>{experience.from}</p>
                                    <p className='experiencePreview'>-</p>
                                    <p className='experienceTo experiencePreview'>{experience.to}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}