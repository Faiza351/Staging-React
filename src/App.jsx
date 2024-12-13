import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'
import Contact from './pages/Contact'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<Home />} />
      <Route exact path='/project' element={<Projects/>} />
      <Route exact path='/about' element={<AboutUs/>} />
      <Route exact path='/blog' element={<Blog/>} />
      <Route exact path='/contact' element={<Contact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
