import React, { useContext } from 'react'
import { ThemeContext } from '../context/ContextProvider'

function GamePage() {
    const {enemyCount, setEnemyCount} = useContext(ThemeContext)
  return (
    <div>
    </div>
  )
}

export default GamePage
