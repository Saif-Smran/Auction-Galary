import React, { useEffect, useState } from 'react';
import SingleItem from './singleItem';




const AuctionItems = () => {

    const [items, setItems] = useState([])


    useEffect(() => {
        fetch('/auction.json')
            .then(res => res.json())
            .then(data => setItems(data))
    },[])

    console.log(items)

    return (
        <div>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                <table className="table p-2">
                    {/* head */}
                    <thead className='p-4'>
                        <tr className='text-xl font-semibold'>
                            <th className='py-6'>Items</th>
                            <th className='py-6'>Current Bid</th>
                            <th className='py-6'>Time Left</th>
                            <th className='py-6'>Bid Now</th>
                        </tr>
                    </thead>
                    <tbody className='p-4'>
                        {
                            items.map((item) => (
                                <SingleItem key={item.id} item={item}></SingleItem>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AuctionItems;