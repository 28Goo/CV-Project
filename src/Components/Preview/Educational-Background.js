import React from 'react'

export default function EducationalBackground({ educationalBackground, key }) {
    return(
        <div className='educationalBackground' key={key} data-key={key}>
            <h1>{educationalBackground.course}</h1>
            <h1>{educationalBackground.school}</h1>
            <h1>{educationalBackground.from}</h1>
            <h1>{educationalBackground.to}</h1>
        </div>
    )
}