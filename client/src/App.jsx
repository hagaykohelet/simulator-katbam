import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from '../Pages/MainPage'
import {ContextProvider} from '../context/ContextProvider'
import GamePage from '../Pages/GamePage'

function App() {

  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/game' element={<GamePage />}/>
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
