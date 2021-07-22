import React from 'react'
import { useState,useRef } from 'react'
function Embedgmaps() {
const [loc,setloc]=useState("https://www.google.com/maps/embed/v1/place?key=AIzaSyDRoKaW9SQ6cZrd9tV_42MmSyvj0N4xfoE&q=MIT")
const locinp = useRef(null)
function findlocation(e){
    var ivalue = locinp.current.value.replaceAll(" ","+")
    console.log(ivalue);
    var l = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDRoKaW9SQ6cZrd9tV_42MmSyvj0N4xfoE&q=${ivalue}`
    setloc(l)
}

    return (
        <div>
            <iframe
            width="600"
            height="450"
            title="gmaps"
            loading="lazy"
            allowFullScreen
            src={loc}
            >
            </iframe><br></br>

        <input  ref={locinp} placeholder="Eg:MIT"></input>
        <button onClick={findlocation}>Locate</button>
        </div>
    )
}

export default Embedgmaps
