import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Toaster, toast } from 'react-hot-toast';
import { FaCheckCircle, FaTimes } from 'react-icons/fa';

const SingleItem = ({ item , handleFavCard ,handleTotalAmountPos}) => {
    const [liked, setLiked] = useState(false);


    const toggleLike = () => {

        if (liked === false) {
            setLiked(true);
            showNotification()
            handleFavCard(item)
            handleTotalAmountPos(item.currentBidPrice)
        }
    };

    const formattedPrice = (price) =>
        price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

    const showNotification = () => {
        toast.custom((t) => (
            <div
                className={`flex items-start gap-3 p-4 rounded-xl shadow-lg border-l-4 border-green-500 bg-white text-gray-800 transition-all duration-300 ${t.visible ? 'animate-enter' : 'animate-leave'
                    }`}
                style={{ minWidth: '280px' }}
            >
                <FaCheckCircle className="text-green-500 mt-1" size={22} />
                <div className="flex-1">
                    <p className="font-semibold">An item is added to favorites.</p>
                </div>
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors"
                >
                    <FaTimes size={18} />
                </button>
            </div>
        ), {
            position: 'top-right',
            duration: 5000,
        });
    };

    return (
        <tr >
            <th className="flex items-center space-x-4">
                <img className="w-[96px] h-[96px]  object-contain" src={item.image} alt={item.title} />
                <span className="text-lg">{item.title}</span>
            </th>
            <td className='text-lg'>{formattedPrice(item.currentBidPrice)}</td>
            <td className='font-bold'>{item.timeLeft}</td>
            <td>
                <Toaster position="top-right" />
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
