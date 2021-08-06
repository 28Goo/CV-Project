import React from 'react'

export default function EducationalBackground({ educationalBackground }) {
    return(
        <div className='educationalBackground'>
            {
                educationalBackground.map(info => {
                    return(
                        <div className='educations' key={info.id}>
                            <h1 className='educationTitle previewTitle'>Education</h1>
                            <div className='educationDetails'>
                                <p className='course educationPreview'>{info.course}</p>
                                <p className='school educationPreview'>{info.school}</p>
                                <p className='educationFrom educationPreview'>{info.from}</p>
                                <p className='educationTo educationPreview'>{info.to}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}