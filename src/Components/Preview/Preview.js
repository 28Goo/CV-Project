import React from 'react'
import GeneralInformation from './General-Information'

export default function Preview({
    firstName, lastName, profession, address, contactNumber, email, description
}) {
    return(
        <div>
            <GeneralInformation
                firstName={firstName}
                lastName={lastName}
                profession={profession}
                address={address}
                contactNumber={contactNumber}
                email={email}
                description={description}
            />
        </div>
    )
}