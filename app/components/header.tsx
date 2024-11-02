"use client";

import Image from 'next/image';
import SocialIcon from '../common/SocialIcon';
import { socialLinks } from '../common/Data';
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between w-full px-12 py-14">
                <div className="flex items-center">
                    <Image
                        src="/cublockchain1.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="hover:opacity-80 transition-opacity"
                    />
                    <div className="ml-4 flex-col md:flex hidden">
                        <span className="text-xl font-bold text-gray-800">Carleton Blockchain</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-4 mr-12 py-4 md:flex hidden">
                        {socialLinks.map(({ href, icon, label }) => (
                            <SocialIcon
                                key={label}
                                href={href}
                                icon={icon}
                                label={label}
                                size={30}
                            />
                        ))}
                    </div>
                    <div className="md:hidden">
                        <button 
                            onClick={() => setIsMenuOpen(!isMenuOpen)} 
                            className="text-gray-800 text-5xl"
                            style={{ width: '50px', height: '50px' }}
                        >
                            ☰
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 bg-white z-50 flex flex-col items-center transition-opacity transition-transform duration-300 ${
                    isMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
                style={{ pointerEvents: isMenuOpen ? 'auto' : 'none' }}
            >
                <button 
                    onClick={() => setIsMenuOpen(false)} 
                    className="absolute top-8 right-8 text-gray-800 w-12 h-12 flex items-center justify-center text-4xl hover:bg-gray-100 rounded-full transition-all"
                >
                    ✕
                </button>
                
                <div className={`flex-1 flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    {socialLinks
                        .filter(link => !link.href.includes('discord'))
                        .map(({ href, icon: Icon, label }) => (
                            <div
                                key={label}
                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                            >
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-[#4A4F8C] transition-colors"
                                    aria-label={label}
                                >
                                    <Icon size={40} />
                                </a>
                            </div>
                        ))}
                </div>

                <div className={`mt-auto mb-8 w-full flex flex-col items-center gap-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <a 
                        href="https://airtable.com/appFyj8uk3eYgu15j/pagyl0OneNLCVTXpA/form" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative z-10 inline-flex h-16 w-3/4 items-center justify-center overflow-hidden rounded-md border border-neutral-600 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
                        style={{ margin: '0 2rem' }}
                    >
                         <span className="text-lg">Join Our Team! 🚀</span>
                         <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"></div>
                    </a>

                    <a
                        href="https://discord.gg/3mDZXNnH"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative h-16 w-3/4 overflow-hidden rounded-md bg-[#4A4F8C] px-6 text-neutral-50 transition hover:bg-[#7B89B8] flex items-center justify-center"
                    >
                        <span className="relative flex items-center gap-2">
                            <FaDiscord size={32} />
                            <span className="text-lg">Join Our Discord!</span>
                        </span>
                        <div className="absolute inset-0 flex w-full [animation:shine_3.75s_ease-in-out_infinite]">
                            <div className="relative h-full w-8 -skew-x-12 bg-white/20 translate-x-[-200%]"></div>
                        </div>
                        <style jsx>{`
                            @keyframes shine {
                                from { transform: translateX(-200%); }
                                to { transform: translateX(200%); }
                            }
                        `}</style>
                    </a>
                </div>
            </div>
        </div>
    );
}