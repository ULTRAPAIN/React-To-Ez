import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    useEffect(()=>{
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
        .then((response)=> response.json()
        ).then((res)=> setData(res[currency])
        ).catch((error)=>{
            console.log("Error"+error)
        })
        console.log(data);
    },[currency, data])
    return data

}

export default useCurrencyInfo