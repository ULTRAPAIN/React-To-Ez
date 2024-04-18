
import React from 'react'
import  { useState } from 'react'
import Data from './Data'
import Tours from './components/Tours'

function App() {
  const [tours, setTours]=useState(Data)
  
  function removeTour(id){
    const newTour=tours.filter(tour=> tour.id !== id)
    setTours(newTour)
  }
  if(tours.length==0){
    return (
      <>
  <div className='refresh'>
    <h2 className='text'>No Tours Left</h2>
 
  <button className='btn-white' onClick={()=>setTours(Data)}>
    Refresh
  </button>
  </div>
        </>
    )
  }
  return (
    <>
  <div>
    <Tours data={tours} removeTour={removeTour}/>
  </div>
    </>

  )
}

export default App

