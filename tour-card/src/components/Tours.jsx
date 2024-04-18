import React from 'react'
import Card from './Card'

function Tours({data,removeTour}) {
    return (
        <div className='container'>
            <div>
                <h2 className='title'>Chalo Kahi Ghumne ! </h2>  
            </div>
            <div className='cards'>
                {
                    data.map((tour)=>{
                        return (<Card key={tour.id} removeTour={removeTour} {...tour}/>)
                    })
                }
            </div>
         
        </div>
        
    )
}

export default Tours
