import React from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { FaTimesCircle, FaTimes } from 'react-icons/fa';
import { BiError } from "react-icons/bi";



const FevourateItem = ({item}) => {

    const showError = () => {
        toast.custom((t) => (
            <div
                className={`flex items-start gap-3 p-4 rounded-xl shadow-lg border-l-4 border-yellow-500 bg-white text-gray-800 transition-all duration-300 ${t.visible ? 'animate-enter' : 'animate-leave'
                    }`}
                style={{ minWidth: '280px' }}
            >
                <BiError className="text-white bg-yellow-400 rounded-4xl p-0.5 mt-1" size={32} />
                <div className="flex-1">
                    <p className="font-semibold">Item Removed From Favourites!</p>
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

    const formattedPrice = (price) =>
        price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        });

    return (
        <div className="max-w-sm mx-auto mt-4 p-4 border rounded-lg bg-white">
            <div className="flex items-start">
                <img
                    alt="Vintage Leica M3 Camera"
                    className="w-16 h-16 object-cover mr-4"
                    height="60"
                    src={item.image}
                    width="60"
                />
                <div className="flex-1">
                    <div className="flex justify-between items-start">
                        <h2 className="text-lg font-semibold">{item.title}</h2>
                        <Toaster position="top-right" />
                        <button onClick={showError} className="text-red-300 hover:text-red-700">
                            <FaTimes />
                        </button>
                    </div>
                    <div className="mt-2">
                        <span className="text-gray-700 font-semibold">{formattedPrice(item.currentBidPrice)}</span>
                        <span className="text-gray-500 ml-4">Bids: {item.bidsCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FevourateItem;