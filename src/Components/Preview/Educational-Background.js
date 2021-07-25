import React from 'react'

export default function EducationalBackground({ educationalBackground }) {
    return(
        <section className='educationalBackground'>
            <h1>{educationalBackground.course}</h1>
            <h1>{educationalBackground.school}</h1>
            <h1>{educationalBackground.from}</h1>
            <h1>{educationalBackground.to}</h1>
        </section>
    )
}