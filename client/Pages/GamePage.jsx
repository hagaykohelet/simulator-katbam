import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ContextProvider'
import Enemies from '../components/Enemies'
import '../style/GamePage.css'
function GamePage() {
    const { enemyCount, setEnemyCount } = useContext(ThemeContext)
    return (
        <div className='game-page'>
            <Enemies />
        </div>
    )
}

export default GamePage