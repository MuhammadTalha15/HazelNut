import { useState, useEffect } from 'react'
import './styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Articals from './components/Articals'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loader from './components/Loader'


function App() {

  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloader(false)
    }, 1500);
  }, []);

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Home /><Footer/></>
    },
    {
      path: '/About',
      element: <><Navbar /><About /><Footer/></>
    },
    {
      path: '/Projects',
      element: <><Navbar /><Projects /><Footer/></>
    },
    {
      path: '/Articals',
      element: <><Navbar /><Articals /><Footer/></>
    },
    {
      path: '/Contact',
      element: <><Navbar /><Contact /><Footer/></>
    }
  ])

  


  return (
    <>
    {loader && <Loader/>}
      <main className='mn'>
        <RouterProvider router={routes}></RouterProvider>
      </main>
    </>
  )
}

export default App
