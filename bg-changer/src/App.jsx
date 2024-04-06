import { useState } from "react"


function App() {

  const [color,setColor]= useState("olive")

  return (
    <>
    {/* <div className="flex items-center justify-center h-screen bg-orange-500 ">
    <button className="p-4 text-5xl text-orange-400 duration-500 bg-white rounded-xl hover:bg-orange-500 hover:text-white ">Jai shree Ram</button> 
    </div> */}

    <div className="w-full h-screen duration-200 "style={{backgroundColor:color}}>
      <div className="fixed inset-x-0 flex flex-wrap justify-center px-2 bottom-12">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-4 bg-white shadow-lg rounded-3xl">
          <button onClick={()=>{setColor("red")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none shadow-slate-900 active:translate-x-0 active:translate-y-0 first-line:py-1" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={()=>{setColor("green")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none active:translate-x-0 active:translate-y-0 first-line:py-1 shadow-slate-900 " style={{backgroundColor:"green"}}>Green</button>
          <button onClick={()=>{setColor("blue")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none active:translate-x-0 active:translate-y-0 first-line:py-1 shadow-slate-900" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={()=>{setColor("black")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none active:translate-x-0 active:translate-y-0 first-line:py-1 shadow-slate-900" style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>{setColor("orange")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none active:translate-x-0 active:translate-y-0 first-line:py-1 shadow-slate-900" style={{backgroundColor:"orange"}}>orange</button>
          <button onClick={()=>{setColor("violet")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none active:translate-x-0 active:translate-y-0 first-line:py-1 shadow-slate-900" style={{backgroundColor:"violet"}}>violet</button>
          <button onClick={()=>{setColor("purple")}} className="px-4 py-2 text-white transition-transform duration-200 ease-in-out -translate-x-1 -translate-y-1 rounded-full shadow-lg outline-none active:translate-x-0 active:translate-y-0 shadow-slate-900 first-line:py-1" style={{backgroundColor:"purple"}}>Purple</button>
        </div>
      </div>
    </div> 
    </>
  )
}

export default App
