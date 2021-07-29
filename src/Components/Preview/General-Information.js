import React from 'react'

export default function GeneralInformation({ genInfo }) {
    return(
    <div className='generalInformation'>
        <div className='resumeHeader'>
            <p className='firstName generalPreview'>{genInfo.firstName}</p>
            <p className='lastName generalPreview'>{genInfo.lastName}</p>
            <p className='profession generalPreview'>{genInfo.profession}</p>
        </div>
        <div className='bio'>
            <h1 className='bioTitle'>About Me</h1>
            <p className='generalDescription generalPreview'>{genInfo.description}</p>
        </div>
        <div className='contact'>
            <h1 className='contactTitle'>Contact</h1>
            <p className='address generalPreview'>{genInfo.address}</p>
            <p className='contactNumber generalPreview'>{genInfo.contactNumber}</p>
            <p className='email generalPreview'>{genInfo.email}</p>
        </div>
    </div>
    )
}