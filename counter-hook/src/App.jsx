import { useState } from 'react'

function App() {
  let counter =0
  const [count, setCount] = useState(counter)

const addValue=()=>{
  setCount(count+1)
}

const subtractValue=()=>{
    setCount(count-1)
}
const resetValue=()=>{
  setCount(0)
}
  return (
    <>
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="relative flex flex-col items-center gap-10 text-3xl font-semibold text-center text-white">Increment & Decrement
      <div className='flex justify-center gap-x-5 '>
        <button className='text-6xl px-7 active:text-gray-600' onClick={subtractValue}>-</button>
        <div className='text-6xl border-l border-r-2 border-gray-700 px-14'>{count}</div>
        <button className='text-6xl px-7 active:text-gray-600' onClick={addValue}>+</button>  
      </div>
      <div className='w-1/2 px-2 py-2 font-semibold text-black duration-200 bg-gray-600 cursor-pointer rounded-xl hover:bg-gray-700 active:text-white' onClick={resetValue}>Reset</div>
      </div>
    </div>
    </>
  )
}

export default App
