import React from 'react'

export default function PracticalExperience ({ practicalExperience }) {
    return(
        <div className='practicalExperience'>
            {
                practicalExperience.map(experience => {
                    return(
                        <div className='practicalExperience' key={experience.id}>
                            <h1>{experience.position}</h1>
                            <h1>{experience.company}</h1>
                            <h1>{experience.description}</h1>
                            <h1>{experience.from}</h1>
                            <h1>{experience.to}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}