
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {

  

  return (
    <>
<BrowserRouter>
<Navbar/>
<Routes>
      <Route path="/"  element={<Home/>} />
    </Routes>
    <Footer/>
    
    </BrowserRouter>
    </>
  )
}

export default App
