import React from 'react'
import { useState } from 'react'
import './App.css'
import AuctionItems from './Components/Auction Items/AuctionItems'
import Baner from './Components/Baner/Baner'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar'
import FevourateItem from './Components/Auction Items/FevourateItem'
import { FaRegHeart } from "react-icons/fa";



function App() {

  const [totalAmount, setTotalAmount] = useState(0)
  const [favCard, setFavCard] = useState([])

  const handleTotalAmountPos = (amount) => {
    const newTotal = totalAmount + amount;
    setTotalAmount(newTotal);
  }
  const handleTotalAmountNeg = (amount) => {
    const newTotal = totalAmount - amount;
    setTotalAmount(newTotal);
  }

  const handleFavCard = (card) =>{
    const newFavCard = [...favCard, card]
    setFavCard(newFavCard)
  }

  const formattedPrice = (price) =>
    price.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

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
                <AuctionItems handleFavCard={handleFavCard} handleTotalAmountPos={handleTotalAmountPos}></AuctionItems>
              </div>
              <div className='right-container  w-[30%]'>
                <div className="bg-white rounded-lg shadow-lg py-5">
                  <h1 className='text-center text-2xl font-bold flex justify-center items-center gap-4'><span><FaRegHeart /></span> Favorite Items</h1>
                  <hr className="w-full border-t border-dotted border-gray-400 mt-6 " />
                  {
                    favCard.map(item => <FevourateItem key={item.id} item={item} ></FevourateItem>)
                  }
                  <hr className="w-full border-t border-dotted border-gray-400 mb-6 mt-4" />
                  <p className='text-2xl px-5'>Total bids Amount : {formattedPrice(totalAmount)} </p>
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
