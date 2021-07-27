import React from 'react'

export default function EducationalBackground({ educationalBackground }) {
    return(
        <div className='educationalBackground'>
            {
                educationalBackground.map(info => {
                    return(
                        <div className='educations' key={info.id} data-key={info.id}>
                        <h1>{info.course}</h1>
                        <h1>{info.school}</h1>
                        <h1>{info.from}</h1>
                        <h1>{info.to}</h1>
                        </div>
                    );
                })
            }
        </div>
    )
}