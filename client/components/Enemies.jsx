import React, { useEffect, useRef, useState } from 'react'
function Enemies({initialX, initialY, onKill }) {
    const [x, setX] = useState(0)
    useEffect(() => {
        const moveInterval = setInterval(() => {
            setX(prevX => {
                if (prevX > window.innerWidth) {
                    onKill()
                    return prevX;
                }
                return prevX + 2;
            });
        }, 30);

        return () => clearInterval(moveInterval);
    }, []);
    return (
      <div className='circle' style={{
            backgroundColor: "black",
            position:"relative",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            transform: `translate(${x}px, ${initialY}px)`,
            cursor: 'pointer'
        }} onClick={onKill}>

        </div>
    )
}

export default Enemies
