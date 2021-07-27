import React from 'react'

export default function PrintCV({ printCV }) {
    return(
        <div className='printCV'>
            <button onClick={printCV}>Generate PDF</button>
        </div>
    )
}