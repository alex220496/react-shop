import React, { useState } from 'react'

export const Testimonials = () => {
    const [count,setCouns] = useState(1)
    const [color,setColor] = useState("green")

    const toggleColor = () => {
        setColor(value => (
           value === "red" ? "green" : "red" 
            )) 
    }
    return (
        <>
            <h1 className="page-title">Testmonials</h1>
            <div>
                <p>Color:{color}</p>
               <button onClick={()=> toggleColor() }>Change color</button>  
            </div>

            
            <button onClick={()=> setCouns(count -1)}>-</button>
            <input type="text" value={count}></input>
            <button  onClick={()=> setCouns(count +1)}>+</button>
        </>
    )
}