/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from  './hooks/useCurrencyInfo'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  
  const [amount , setAmount]=useState(0)
  const [from , setFrom]=useState("usd")
  const [to,setTo]=useState("inr")
  const [convertedAmount, setConvertedAmount]=useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options =Object.keys(currencyInfo)

  const swap=()=>{
    setFrom(to)
    setTo(to)
    setConvertedAmount(amount)
    setAmount(convertedAmount) 
  }

  const convert=()=>{
    setConvertedAmount(amount * currencyInfo[to])
    }
  return (
    <>
  <div
            className="flex flex-wrap items-center justify-center w-full h-screen bg-no-repeat bg-cover"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/4386292/pexels-photo-4386292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                              amount={amount}
                                label="From"
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                selectCurrency={from}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                        
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setTo(currency)}
                                selectCurrency={from}
                                
                            />
                        </div>
                        <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </>
  )
}

export default App
