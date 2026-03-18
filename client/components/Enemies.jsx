import React, { useEffect, useRef, useState } from 'react'
function Enemies() {
    const [display, setDisplay] = useState("block")
    const maxX = parent.innerWidth
    const maxY = parent.innerHeight
    const [x, setX] = useState(0)
    const [y, setY] = useState(Math.floor(Math.random() *maxY))
    useEffect(() => { 
        if (x < maxX) {
            setTimeout(() => {
                setX(x + 2)
            }, 50);
        }
        if (y < maxY) {

            setTimeout(() => {
                setY(y + 1)
            }, 50);
        }
        else if (x >= maxX || y >= maxY) {
            setDisplay("none")
        }
        
    }, [x, y])
    return (
        <div className='circle' style={{
            backgroundColor: "black",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            transform: `translate(${x}px,${y}px)`,
            display: display
        }} onClick={()=>setDisplay("none")}>

        </div>
    )
}

export default Enemies
