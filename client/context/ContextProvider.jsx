import React, { createContext, useState } from 'react'

const ThemeContext = createContext()

function ContextProvider({children}) {
    const [enemyCount, setEnemyCount] = useState(0)
  return (
    <div>
      <ThemeContext value={{enemyCount, setEnemyCount}}>
        {children}
      </ThemeContext>
    </div>
  )
}

export  {ContextProvider, ThemeContext}
