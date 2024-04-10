import React from 'react'
import {useParams} from 'react-router-dom'

function Userdata() 

{
    const {userid}= useParams()
    return (
        <>
        <div className='flex items-center justify-center h-screen '>
            <h1 className='text-3xl font-semibold text-center text-black '>{userid}</h1>
        </div>
        </>
    )
}

export default Userdata
