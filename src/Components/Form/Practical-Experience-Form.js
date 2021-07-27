import React from 'react'

export default function PracticalExperienceForm({ experience, getExperienceInput, addExperience, removeExperience }) {
    return(
        experience.map((item, index) => {
            return(
                <div className='practicalForm' key={item.id} data-key={item.id} data-index={index}>
                    <label htmlFor='position'>Position: </label>
                    <input type='text' id='position' data-key='position' onChange={getExperienceInput}/>

                    <label htmlFor='company'>Company: </label>
                    <input type='text' id='company' data-key='company' onChange={getExperienceInput}/>

                    <label htmlFor='description'>Description: </label>
                    <input type='text' id='description' data-key='description' onChange={getExperienceInput}/>

                    <label htmlFor='from'>From: </label>
                    <input type='text' id='experienceFrom' data-key='from' onChange={getExperienceInput}/>

                    <label htmlFor='to'>To: </label>
                    <input type='text' id='experienceTo' data-key='to' onChange={getExperienceInput}/>
                    
                    <button onClick={addExperience}>Add</button>
                    <button onClick={removeExperience}>Remove</button>
                </div>
            )
        })
    )
}