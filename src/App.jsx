
import './App.css'
import AuctionItems from './Components/Auction Items/AuctionItems'
import Baner from './Components/Baner/Baner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import { FaRegHeart } from "react-icons/fa";

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
        <div className='bg-[#EBF0F5] min-h-screen py-30'>
          <div className='max-w-screen-xl mx-auto sora space-y-6'>
            <div>
              <h1 className='text-2xl font-semibold'>Active Actions</h1>
              <p className='text-xl'>Discover and bid on extraordinary items</p>
            </div>
            <div className='container flex justify-between gap-5'>
              <div className="left-container w-[70%] bg-white rounded-2xl shadow-lg">
                <AuctionItems></AuctionItems>
              </div>
              <div className='right-container  w-[30%]'>
                <div className="bg-white rounded-lg shadow-lg py-5">
                  <h1 className='text-center text-2xl font-bold flex justify-center items-center gap-4'><span><FaRegHeart /></span> Favorite Items</h1>
                  <hr className="w-full border-t border-dotted border-gray-400 my-6 " />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
