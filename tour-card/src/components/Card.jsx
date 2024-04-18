import React from "react"
import { useState } from "react"

function Card({id,image,info,name,price,removeTour}) {
    const[readMore,setReadmore]=useState(false)
    const description =readMore?info:`${info.substring(0,200)}....`

    function readmoreHandler(){
        setReadmore(!readMore)
    }


    return (
        <>
        <div className="card">
            <img src={image} className="image"/>
            <div className="tour-info">
            <div className="tour-details">
                <h4 className="tour-price"> ₹{price}</h4>
                <h4 className="tour-name">{name}</h4>   
            </div>
            <div className="description">
                {description}
                <span className="readmore" onClick={readmoreHandler}>{readMore?'...show less':'show more'}</span>
            </div>
        </div>
        <button className=" btn-red" onClick={()=>removeTour(id)}>Not Interested</button>
        </div>
       
        </>
    )
}

export default Card
