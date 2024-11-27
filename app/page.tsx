"use client";
import Image from 'next/image';
import { FaLinkedin, FaDiscord } from 'react-icons/fa';
import {useState, useRef } from 'react';
import SocialIcon from './common/SocialIcon';
import {teamMembers, faqs } from './common/Data';
import Footer from './components/footer';
import FAQ from './components/faq';
import Header from './components/header';
import Countdown from './components/countdown';
import { motion, useInView } from 'framer-motion';



export default function Home() {

    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const countdownRef = useRef(null);
    const faqRef = useRef(null);
    const isCountdownInView = useInView(countdownRef, { once: true });
    const isFaqInView = useInView(faqRef, { once: true });

    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_50%_350px,#C9EBFF,transparent)]">
                </div>
            </div>
            <Header/>

            <div className="h-[75px]"></div>

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center justify-center flex-1 px-4 md:px-20 py-20 space-y-8"
            >
                <Image
                    src="/cublockchain1.ico"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="hover:opacity-80 transition-opacity animate-bounce [animation-duration:2s] [animation-height:0.5rem]"
                    priority
                />
                
                <div className="flex flex-col items-center space-y-2 text-center">
                    <h1 className="text-4xl md:text-7xl font-bold text-gray-800">
                        Crypto <span className="text-[#4A4F8C]">Curious🧐</span>?
                    </h1>
                </div>

                <div className="flex flex-col items-center space-y-2 text-center px-2 md:px-0">
                    <h3 className="text-sm md:text-lg font-medium text-gray-800">
                        At Carleton Blockchain, we&apos;re building the next wave of
                    </h3>
                    <h3 className="text-sm md:text-lg font-medium text-gray-800">
                        crypto enthusiasts and blockchain developers!
                    </h3>
                </div>
            </motion.main>
        
                <div className="flex flex-col items-center justify-center flex-1">
                    <div className="flex flex-col md:flex-row gap-6 px-4 w-full md:w-auto">
                        <motion.a
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ 
                                duration: 0.7,
                                ease: [0.215, 0.610, 0.355, 1.000],
                                delay: 0.3
                            }}
                            href="https://lu.ma/carletonblockchain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 w-full md:w-48 rounded-md bg-neutral-50 text-[#4A4F8C] border-2 border-[#4A4F8C] transition hover:bg-neutral-100 flex items-center justify-center"
                        >
                            <span className="flex items-center gap-2 px-4">
                                <span>Come to an Event!</span>
                            </span>
                        </motion.a>

                        <motion.a
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ 
                                duration: 0.7,
                                ease: [0.215, 0.610, 0.355, 1.000],
                                delay: 0.4
                            }}
                            href="https://discord.gg/9FgYbBfhK2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="h-12 w-full md:w-48 rounded-md bg-[#4A4F8C] text-neutral-50 transition hover:bg-[#7B89B8] flex items-center justify-center"
                        >
                            <span className="flex items-center gap-2 px-4">
                                <FaDiscord size={24} />
                                <span>Join Discord</span>
                            </span>
                        </motion.a>
                    </div>
                </div>

                <div className="h-[120px]"></div>

                <div className="relative h-full w-full">
                    <div className="absolute inset-0 z-[-2] h-full w-full rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(74,144,226,.5)_100%)]"></div>
                    <motion.div
                        ref={countdownRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isCountdownInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ 
                            duration: 0.7,
                            ease: [0.215, 0.610, 0.355, 1.000],
                            delay: 0.2
                        }}
                    >
                        <Countdown />
                    </motion.div>
                </div>

                <div className="h-[60px]"></div>

                <motion.div 
                    ref={faqRef}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isFaqInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ 
                        duration: 0.7,
                        ease: [0.215, 0.610, 0.355, 1.000],
                        delay: 0.2
                    }}
                    className='flex flex-col items-center justify-center flex-1 px-6 md:px-20 space-y-8'
                >
                    {faqs.map((faq, index) => (
                        <FAQ
                            key={index}
                            faq={faq}
                            isOpen={openFaq === index}
                            onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                        />
                    ))}
                </motion.div>
                

                <div className="flex justify-center mt-8 mb-8 pt-10">
                    <button className="group relative">
                        <a 
                            href="https://airtable.com/appFyj8uk3eYgu15j/pagfjUclBI8HI1kxi/form" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
                        >
                            Contact Us📬
                        </a>
                        <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
                    </button>
                </div>
            <Footer />
        </div>
    );
}
