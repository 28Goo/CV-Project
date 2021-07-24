import React from 'react'

export default function GeneralInformationForm({
    getFirstName, getLastName, getProfession, getAddress, getContactNumber, getEmail, getDescription
}) {
    return(
        <section>
            <form className='generalInformationForm'>
                <label htmlFor='firstName'>First Name: </label>
                <input type='text' id='firstName' onChange={getFirstName} />

                <label htmlFor='lastName'>Last Name: </label>
                <input type='text' id='lastName' onChange={getLastName} />

                <label htmlFor='profession'>Profession: </label>
                <input type='text' id='profession' onChange={getProfession} />
                
                <label htmlFor='address'>Address: </label>
                <input type='text' id='address' onChange={getAddress} />

                <label htmlFor='contactNumber'>Contact Number: </label>
                <input type='text' id='contactNumber' onChange={getContactNumber} />

                <label htmlFor='email'>Email: </label>
                <input type='text' id='email' onChange={getEmail} />

                <label htmlFor='description'>About Me: </label>
                <input type='text' id='description' onChange={getDescription} />
            </form>
        </section>
    );
}
