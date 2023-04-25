import { useState, useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Podcast from './pages/Podcast';
import About from './pages/About';
import Contact from './pages/Contact';

import ApiState from './context/api/apistate';
import ApiContext from './context/api/apiContext';

function App() {
  const blog = useContext(ApiContext)
  const [count, setCount] = useState(0)

  return (
    <>
      <ApiState>

          <Routes>

              <Route exact path="/" element={<Home />} />
              <Route exact path='/blogs' element={<Blogs />} />
              <Route path='/blogs/:id' element={<Blog />} />
              <Route path='/podcast' element={<Podcast />} />
              <Route path='/about' element={<About />} />
              <Route path='/contact' element={<Contact />} />

          </Routes>
      </ApiState>
    </>
  )
}

export default App