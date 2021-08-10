import React from 'react'

export default function GeneralInformation({ genInfo }) {
    return(
    <div className='generalInformation'>
        <div className='resumeHeader'>
            <div className='nameContainer'>
                <p className='firstName'>{genInfo.firstName}</p>
                <p className='lastName'>{genInfo.lastName}</p>
            </div>
            <p className='profession'>{genInfo.profession}</p>
        </div>
        <div className='generalInformationBottom'>
            <div className='bio'>
                <h1 className='bioTitle previewTitle'>About Me</h1>
                <p className='generalDescription generalPreview'>{genInfo.description}</p>
            </div>
            <div className='contact'>
                <h1 className='contactTitle previewTitle'>Contact</h1>
                <div className='contactDetails'>
                    <p className='address generalPreview'>{genInfo.address}</p>
                    <p className='contactNumber generalPreview'>{genInfo.contactNumber}</p>
                    <p className='email generalPreview'>{genInfo.email}</p>
                </div>
            </div>
        </div>
    </div>
    )
}