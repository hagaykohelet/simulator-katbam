import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import MainPage from '../Pages/MainPage'
import {ContextProvider} from '../context/ContextProvider'

function App() {

  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Routes>
            <Route path='/' element={<MainPage />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
