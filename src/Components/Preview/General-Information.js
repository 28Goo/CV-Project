import React from 'react'

export default function GeneralInformation({
    firstName, lastName, profession, address, contactNumber, email, description
}) {
    return(
    <section className='generalInformation'>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <h1>{profession}</h1>
        <h1>{address}</h1>
        <h1>{contactNumber}</h1>
        <h1>{email}</h1>
        <h1>{description}</h1>
    </section>
    )
}