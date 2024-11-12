"use client";
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        // Set target time to November 27, 2024, 6:00 PM EST
        const targetTime = new Date('2024-11-27T18:00:00-05:00').getTime();

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setShowConfetti(true);
                setTimeout(() => setShowConfetti(false), 5000);
                return;
            }

            // Calculate days, hours, minutes, and seconds
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col items-center space-y-4 my-8">
            {showConfetti && <Confetti />}
            <h2 className="text-2xl font-bold text-gray-800">Time until first event!🥳</h2>
            <div className="flex space-x-4">
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-lg bg-[#4A4F8C] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                            {String(timeLeft.days).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-sm text-gray-600 mt-2">Days</span>
                </div>
                <div className="text-3xl font-bold text-[#4A4F8C] self-center pb-6">:</div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-lg bg-[#4A4F8C] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                            {String(timeLeft.hours).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-sm text-gray-600 mt-2">Hours</span>
                </div>
                <div className="text-3xl font-bold text-[#4A4F8C] self-center pb-6">:</div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-lg bg-[#4A4F8C] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                            {String(timeLeft.minutes).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-sm text-gray-600 mt-2">Minutes</span>
                </div>
                <div className="text-3xl font-bold text-[#4A4F8C] self-center pb-6">:</div>
                <div className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-lg bg-[#4A4F8C] flex items-center justify-center">
                        <span className="text-3xl font-bold text-white">
                            {String(timeLeft.seconds).padStart(2, '0')}
                        </span>
                    </div>
                    <span className="text-sm text-gray-600 mt-2">Seconds</span>
                </div>
            </div>
        </div>
    );
};


export default Countdown;


