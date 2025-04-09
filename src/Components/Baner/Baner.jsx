import React from 'react';

const Baner = () => {
    return (
        <div className='max-w-screen-xl mx-auto flex justify-left items-center text-white '>
            <div className='w-1/2 space-y-5'>
                <h2 className='font-semibold text-5xl'>Bid on Unique Items from Around the World</h2>
                <p className='text-2xl font-light'>Discover rare collectibles, luxury goods, and vintage treasures in our curated auctions</p>
                <button className='font-medium text-xl p-4 rounded-2xl btn bg-white'>Explore Auctions</button>
            </div>
        </div>
    );
};

export default Baner;