import React from 'react'

export default function EducationalBackgroundForm({ getEducationalBackground, addEducation, removeEducation, key }) {
    return(
        <section>
            <form className='educationalBackgroundForm' key={key} data-key={key}>
                <label htmlFor='course'>Course: </label>
                <input type='text' id='course' onChange={getEducationalBackground}/>

                <label htmlFor='school'>School: </label>
                <input type='text' id='school' onChange={getEducationalBackground}/>

                <label htmlFor='from'>From: </label>
                <input type='text' id='from' onChange={getEducationalBackground}/>

                <label htmlFor='to'>To: </label>
                <input type='text' id='to' onChange={getEducationalBackground}/>

                <button type='button' onClick={removeEducation}>Remove</button>
                <button type='submit' onClick={addEducation}>Add</button>
            </form>
        </section>
    )
};
