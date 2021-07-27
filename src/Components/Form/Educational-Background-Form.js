import React from 'react'

export default function EducationalBackgroundForm({ getEducationalBackground, addEducation, removeEducation, education }) {
    return(
        <div className='educationForms'>
            {
                education.map((info, index) => {
                    return(
                        <div key={info.id} data-key={info.id} data-index={index}>
                            <label htmlFor='course'>Course: </label>
                            <input type='text' id='course' onChange={getEducationalBackground}/>

                            <label htmlFor='school'>School: </label>
                            <input type='text' id='school' onChange={getEducationalBackground}/>

                            <label htmlFor='from'>From: </label>
                            <input type='text' id='from' onChange={getEducationalBackground}/>

                            <label htmlFor='to'>To: </label>
                            <input type='text' id='to' onChange={getEducationalBackground}/>

                            <button type='button' onClick={addEducation}>Add</button>
                            <button type='button' onClick={removeEducation}>Remove</button>
                        </div>
                    )
                })
            }
        </div>
    )
};
