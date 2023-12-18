import { useState } from "react"

function App(){
    const [counter,setcounter]=useState(15)
    const addvalue=()=>{
        setcounter(counter+1)
    }
    const removevalue=()=>{
        setcounter(counter-1)
    }
    return(
        <>
        <h1>counter value is:15</h1>
        <button onClick={addvalue}>addvalue</button>
        <button onClick={removevalue}>remove value</button>
        </>
    )
}