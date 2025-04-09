import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const SingleItem = ({ item }) => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        if (liked === false) {
            setLiked(true);
        }
    };

    const formattedPrice = (price) =>
        price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

    return (
        <tr >
            <th className="flex items-center space-x-4">
                <img className="w-[96px] h-[96px]  object-contain" src={item.image} alt={item.title} />
                <span className="text-lg">{item.title}</span>
            </th>
            <td className='text-lg'>{formattedPrice(item.currentBidPrice)}</td>
            <td className='font-bold'>{item.timeLeft}</td>
            <td>
                <div
                    onClick={toggleLike}
                    className={`text-2xl flex justify-center items-center ${liked ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                    {liked ? (
                        <FaHeart className="text-red-500" />
                    ) : (
                        <FaRegHeart className="text-gray-500" />
                    )}
                </div>
            </td>
        </tr>
    );
};

export default SingleItem;
