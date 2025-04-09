
import './App.css'
import Baner from './Components/Baner/Baner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <div className="navber max-w-screen-xl mx-auto poppins">
          <Navbar></Navbar>
        </div>
        <div className='sora'>
          <Baner></Baner>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
