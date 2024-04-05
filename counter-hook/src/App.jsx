import { useState } from 'react'
import './App.css'

function App() {
  let counter =0
  const [count, setCount] = useState(counter)

const addValue=()=>{
if(count<20){
  setCount(count+1)
}
}
const subtractValue=()=>{
  if(count>0){
    setCount(count-1)
  }
}
  return (
    <>
    <p>Click the Button Add , the counter increase up to 20 only not above that </p>
    <p>Click the subtract button , the counter will decrease up to 0 only </p>
      <h1>Counter Dynamic</h1>
      <button onClick={addValue}>Add No</button>
      <button onClick={subtractValue}>Subtract No</button>
      <p>count is: {count}</p>
    </>
  )
}

export default App
