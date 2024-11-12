"use client";
import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const SevenSegmentDigit = ({ value }: { value: '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9' }) => {
    // Define which segments should be lit for each number
    const segments: Record<'0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9', number[]> = {
        '0': [1,1,1,0,1,1,1],
        '1': [0,0,1,0,0,1,0],
        '2': [1,0,1,1,1,0,1],
        '3': [1,0,1,1,0,1,1],
        '4': [0,1,1,1,0,1,0],
        '5': [1,1,0,1,0,1,1],
        '6': [1,1,0,1,1,1,1],
        '7': [1,0,1,0,0,1,0],
        '8': [1,1,1,1,1,1,1],
        '9': [1,1,1,1,0,1,1]
    };

    return (
        <div className="relative w-12 h-20 mx-0.5 md:w-16 md:h-28 md:mx-1">

            <div className={`absolute top-0 left-2 right-2 h-2 ${segments[value][0] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* A */}
            <div className={`absolute top-[50%] left-2 right-2 h-2 ${segments[value][3] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* D */}
            <div className={`absolute bottom-0 left-2 right-2 h-2 ${segments[value][6] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* G */}
            
            {/* Vertical segments - top */}
            
            <div className={`absolute top-1 left-0 w-2 h-[45%] ${segments[value][1] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* B */}
            <div className={`absolute top-1 right-0 w-2 h-[45%] ${segments[value][2] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* C */}
            
            {/* Vertical segments - bottom */}
            <div className={`absolute bottom-1 left-0 w-2 h-[45%] ${segments[value][4] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* E */}
            <div className={`absolute bottom-1 right-0 w-2 h-[45%] ${segments[value][5] ? 'bg-[#1A1B2E]' : 'bg-[#E3E5E8]'}`} /> {/* F */}
        </div>

    );
};

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
        <div className="w-full flex justify-center">
            <div className="flex flex-col items-center space-y-4 my-4 md:my-8 bg-white p-4 md:p-8 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 mx-4 md:mx-0 max-w-[800px] w-full">
                {showConfetti && <Confetti />}
                <h2 className="text-xl md:text-2xl font-bold text-[#404EED] text-center">Time until first event!🥳</h2>
                <div className="flex flex-row flex-wrap justify-center items-center gap-4 md:gap-8 p-2 md:p-4">
                    {/* Days */}
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <SevenSegmentDigit value={String(timeLeft.days).padStart(2, '0')[0] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                            <SevenSegmentDigit value={String(timeLeft.days).padStart(2, '0')[1] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                        </div>
                        <span className="text-xs text-[#5865F2] mt-2 tracking-widest font-bold">DAYS</span>
                    </div>

                    {/* Hours */}
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <SevenSegmentDigit value={String(timeLeft.hours).padStart(2, '0')[0] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                            <SevenSegmentDigit value={String(timeLeft.hours).padStart(2, '0')[1] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                        </div>
                        <span className="text-xs text-[#5865F2] mt-2 tracking-widest font-bold">HOURS</span>
                    </div>

                    {/* Minutes */}
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <SevenSegmentDigit value={String(timeLeft.minutes).padStart(2, '0')[0] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                            <SevenSegmentDigit value={String(timeLeft.minutes).padStart(2, '0')[1] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                        </div>
                        <span className="text-xs text-[#5865F2] mt-2 tracking-widest font-bold">MINUTES</span>
                    </div>

                    {/* Seconds */}
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <SevenSegmentDigit value={String(timeLeft.seconds).padStart(2, '0')[0] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                            <SevenSegmentDigit value={String(timeLeft.seconds).padStart(2, '0')[1] as '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'} />
                        </div>
                        <span className="text-xs text-[#5865F2] mt-2 tracking-widest font-bold">SECONDS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Countdown;


