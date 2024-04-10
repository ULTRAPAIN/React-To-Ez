import React, { useState } from 'react'
import { useEffect } from 'react'

function Github() {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/ultrapain')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setData(data)
        })
    },[])
    return (
        <>
         <div className='flex flex-col items-center p-4 m-4 text-3xl font-bold text-center text-black bg-no-repeat bg-cover gap-y-4 bg-origin-padding '>Github Followers:{data.followers}
         <img src={data.avatar_url} alt="git picture" width={300} className='bg-cover border-4 border-red-500 rounded-xl '  draggable="false"/>
         </div>
       
        </>
       
    )
}

export default Github
