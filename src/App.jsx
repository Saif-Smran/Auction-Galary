
import './App.css'
import Baner from './Components/Baner/Baner'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div className='poppins'>
        <div className="navber max-w-screen-xl mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="baner bg-[url(/Banner-min.jpg)] bg-cover bg-left bg-no-repeat h-[80vh] sora flex items-center text-white">
          <Baner></Baner>
        </div>
      </div>
    </>
  )
}

export default App
