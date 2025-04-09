import React from 'react';

const Footer = () => {
    return (
        <div className='sora text-center space-y-4 h-[460px] flex flex-col justify-center items-center'>
            <a className="text-xl"><span className='text-[#003EA4]'>Auction</span><span className='font-bold text-[#FFD337]'>Galary</span></a>
            <p className='space-x-2 text-xl'><span>Bid.</span> <span>Win.</span> <span>Own.</span> </p>
            <ul className="menu menu-horizontal px-1 text-lg">
                <li><a>Home</a></li>
                <li><a >Auctions</a></li>
                <li><a>Categories</a></li>
                <li><a>How to works</a></li>
            </ul>
            <p className="rext-lg">© 2025 AuctionHub. All rights reserved.</p>
        </div>
    );
};

export default Footer;