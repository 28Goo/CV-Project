import React from 'react'

export default function GeneralInformation({ genInfo }) {
    return(
    <div className='generalInformation'>
        <h1>{genInfo.firstName}</h1>
        <h1>{genInfo.lastName}</h1>
        <h1>{genInfo.profession}</h1>
        <h1>{genInfo.address}</h1>
        <h1>{genInfo.contactNumber}</h1>
        <h1>{genInfo.email}</h1>
        <h1>{genInfo.description}</h1>
    </div>
    )
}