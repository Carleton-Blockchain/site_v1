"use client";

import Link from 'next/link';
import Image from 'next/image';
import SocialIcon from '../common/SocialIcon';
import { socialLinks } from '../common/Data';
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-white" />
            
            <div className="absolute inset-0 border-2 border-gray-300 rounded-full mx-6 my-4" />
            
            <div className="relative z-10 flex items-center justify-between w-full px-12 py-8">
                <div className="flex items-center space-x-4">
                    <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity">
                        <Image
                            src="/cublockchain1.ico"
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        <div className="ml-2 flex-col">
                            <span className="text-xl font-bold text-[#4A4F8C]">
                                Carleton<br/>Blockchain
                            </span>
                        </div>
                    </Link>
                    <Link
                        href="/team"
                        className={`h-12 px-4 transition hover:opacity-80 flex items-center justify-center text-xl md:flex hidden ${
                            pathname === '/team'
                            ? 'text-[#4A4F8C] border-2 border-[#4A4F8C] rounded-md'
                            : 'text-[#4A4F8C]'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Team
                    </Link>
                </div>
                <div className="flex items-center space-x-4">
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
                    className="absolute top-14 right-12 text-gray-800 w-12 h-12 flex items-center justify-center text-4xl hover:bg-gray-100 rounded-full transition-all"
                >
                    ✕
                </button>
                
                <div className={`flex-1 flex flex-col items-center justify-center space-y-6 transition-all duration-300 ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <div className="block px-4 py-2">
                        <Link
                            href="/team"
                            className={`h-12 px-4 transition hover:opacity-80 flex items-center justify-center text-xl ${
                                pathname === '/team'
                                ? 'text-[#4A4F8C] border-2 border-[#4A4F8C] rounded-md'
                                : 'text-[#4A4F8C]'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Team
                        </Link>
                    </div>

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
                        href="https://discord.gg/9FgYbBfhK2"
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