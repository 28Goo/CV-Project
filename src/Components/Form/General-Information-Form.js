import React from 'react'

export default function GeneralInformationForm({
    getGeneralInput
}) {
    return(
        <div className='generalForm'>
            <form className='generalInformationForm'>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' id='firstName' onChange={getGeneralInput} />

                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' id='lastName' onChange={getGeneralInput} />

                <label htmlFor='profession'>Profession: </label>
                <input type='text' id='profession' onChange={getGeneralInput} />
                
                <label htmlFor='address'>Address: </label>
                <input type='text' id='address' onChange={getGeneralInput} />

                <label htmlFor='contactNumber'>Contact Number: </label>
                <input type='text' id='contactNumber' onChange={getGeneralInput} />

                <label htmlFor='email'>Email: </label>
                <input type='text' id='email' onChange={getGeneralInput} />

                <label htmlFor='description'>About Me: </label>
                <input type='text' id='description' onChange={getGeneralInput} />
            </form>
        </div>
    );
}
