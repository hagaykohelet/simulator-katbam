import  { useContext, useState } from 'react'
import { ThemeContext } from '../context/ContextProvider'
import {useNavigate} from 'react-router-dom'
import '../style/MainPage.css'
function MainPage() {
    const { enemyCount, setEnemyCount } = useContext(ThemeContext)
    const navigate = useNavigate()
    const [classBtn, setClassBtn] = useState("allow")
    function decrease() {
        if (enemyCount > 1) {
            setEnemyCount(enemyCount - 1)
        }
        else {
            setClassBtn("hide")
        }
    }

    return (
        <div className='main-page'>
            <h1>משחק כטבם</h1>

            <div className="enemy">

                <button onClick={() =>{ setEnemyCount(enemyCount + 1);setClassBtn("allow")}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7-7v14" />
                </svg></button>
                <p>{enemyCount}</p>
                <button className={classBtn} onClick={ decrease }><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14">
                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="16;0" />
                    </path>
                </svg></button>
            </div>
            <button className='start-game' onClick={()=>navigate('/game')}>START GAME</button>
        </div>
    )
}

export default MainPage
