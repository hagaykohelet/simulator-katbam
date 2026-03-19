import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ContextProvider'
import Enemies from '../components/Enemies'
import '../style/GamePage.css'
function GamePage() {
    const { enemyCount, setEnemyCount } = useContext(ThemeContext)
    const [enemies, setEnemies] = useState([])


    useEffect(() => {
        const timer = setTimeout(() => {
            const newEnemy = {
                id: Math.random().toString(36).substr(2, 9),
                startY: Math.floor(Math.random() * window.innerHeight),
                startX: Math.floor(Math.random() * window.innerWidth),
            };
            setEnemies(prevCount => [...prevCount, newEnemy]);
        }, 500)
        return () => clearTimeout(timer);
    }, [enemies]);
    const removeEnemy = (id) => {
        setEnemies(prev => prev.filter(e => e.id !== id));
    }


    return (
        <div className='game-page' style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
            {enemies.map((enemy) => (
                <Enemies
                    key={enemy.id} 
                    id={enemy.id}
                    initialY={enemy.startY}
                    initialX={enemy.initialX}
                    onKill={() => removeEnemy(enemy.id)}
                />
            ))}

        </div>
    )
}

export default GamePage