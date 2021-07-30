import React from 'react'

export default function EducationalBackgroundForm({ education, getEducationInput, addEducation, removeEducation }) {
    return(
            education.map((info, index) => {
                return(
                    <div className='educationForm' key={info.id} data-key={info.id} data-index={index}>
                        <label htmlFor='course'>Course: </label>
                        <input type='text' id='course' data-key='course' onChange={getEducationInput}/>

                        <label htmlFor='school'>School: </label>
                        <input type='text' id='school' data-key='school' onChange={getEducationInput}/>

                        <label htmlFor='educationFrom'>From: </label>
                        <input type='text' id='educationFrom' data-key='from' onChange={getEducationInput}/>

                        <label htmlFor='educationTo'>To: </label>
                        <input type='text' id='educationTo' data-key='to' onChange={getEducationInput}/>

                        <div className='buttonContainer' data-key={info.id}>
                            <button className='add' onClick={addEducation}>Add</button>
                            <button className='remove' onClick={removeEducation}>Remove</button>
                        </div>
                    </div>
                )
            })
    )
};
