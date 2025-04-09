import React from 'react';

const Baner = () => {
    return (
        <div className=" bg-[url(/Banner-min.jpg)] bg-cover bg-left bg-no-repeat h-[90vh] sora flex items-center text-white ">
            <div className='w-full space-y-5 max-w-screen-xl mx-auto'>
                <h2 className='font-semibold text-4xl'>Bid on Unique Items from <br /> Around the World</h2>
                <p className='text-xl font-light'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
                <button className='font-medium text-xl p-4 rounded-2xl btn bg-white'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Baner;