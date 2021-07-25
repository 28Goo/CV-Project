import React from 'react'

export default function GeneralInformationForm({
    getGenInfo
}) {
    return(
        <section>
            <form className='generalInformationForm'>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' id='firstName' onChange={getGenInfo} />

                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' id='lastName' onChange={getGenInfo} />

                <label htmlFor='profession'>Profession: </label>
                <input type='text' id='profession' onChange={getGenInfo} />
                
                <label htmlFor='address'>Address: </label>
                <input type='text' id='address' onChange={getGenInfo} />

                <label htmlFor='contactNumber'>Contact Number: </label>
                <input type='text' id='contactNumber' onChange={getGenInfo} />

                <label htmlFor='email'>Email: </label>
                <input type='text' id='email' onChange={getGenInfo} />

                <label htmlFor='description'>About Me: </label>
                <input type='text' id='description' onChange={getGenInfo} />
            </form>
        </section>
    );
}
