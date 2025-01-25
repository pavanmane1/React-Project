import React, { useState } from 'react';

const LoveScreen = () => {
    const [animate, setAnimate] = useState(false);

    const handleClick = () => {
        setAnimate(true);

        // Reset animation state after 3 seconds
        setTimeout(() => {
            setAnimate(false);
        }, 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white to-red-500 flex flex-col items-center justify-center">
            {/* Title */}
            <h1 className="text-white text-4xl font-bold mb-8">Love</h1>

            {/* Heart Animation */}
            <div
                className={`${animate ? 'animate-bounce' : ''
                    } text-white text-6xl mb-4`}
            >
                ❤️
            </div>

            {/* Button */}
            <button
                onClick={handleClick}
                className="bg-white text-pink-600 font-semibold px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            >
                for you
            </button>

            {/* Animated Text */}
            {animate && (
                <div className="mt-8 text-white text-3xl font-bold animate-fadeIn">
                    I Love You My Gulab Jamun Laduuuuu  #Pravi
                </div>
            )}
        </div>
    );
};

export default LoveScreen;
