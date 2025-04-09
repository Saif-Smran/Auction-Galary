import React from 'react';
import { IoNotificationsOutline } from "react-icons/io5";


const Navbar = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <a className="text-xl"><span className='text-[#003EA4]'>Auction</span><span className='font-bold text-[#FFD337]'>Galary</span></a>
                </div>
                <div className="navbar-center flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><a>Home</a></li>
                        <li><a >Auctions</a></li>
                        <li><a>Categories</a></li>
                        <li><a>How to works</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <span className='bg-[#EBF0F5] p-2 rounded-full'><IoNotificationsOutline size={25} /></span>
                    <div className="avatar">
                        <div className="w-11 rounded-full">
                            <img src="/Group 3466088.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;