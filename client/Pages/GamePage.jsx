import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ContextProvider'
import Enemies from '../components/Enemies'
import '../style/GamePage.css'
function GamePage() {
    const { enemyCount, setEnemyCount } = useContext(ThemeContext)
    const [count, setCount] = useState([])

    useEffect(()=>{
        setTimeout(() => {
            setCount([...count, "newEnemy"])
        }, 500);
    },[count])

    return (
        <div className='game-page'>
            {count.map((item, id)=>{
                    return(
                    <Enemies key={id}/>)
            })}
            
        </div>
    )
}

export default GamePage