"use client";
import Image from 'next/image';
import { FaLinkedin, FaDiscord } from 'react-icons/fa';
import {useState } from 'react';
import SocialIcon from './common/SocialIcon';
import {teamMembers, faqs } from './common/Data';
import Footer from './components/footer';
import FAQ from './components/faq';
import OurMission from './components/mission';
import Header from './components/header';
import Countdown from './components/countdown';
import { EventCard } from './components/event';


export default function Home() {

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_50%_350px,#C9EBFF,transparent)]">
                </div>
            </div>
            <Header/>

            <main className="flex flex-col items-center justify-center flex-1 px-4 md:px-20 py-20 space-y-8">
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
            </main>
        
                <div className="flex flex-col items-center justify-center flex-1">
                <a
                    href="https://discord.gg/9FgYbBfhK2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-12 overflow-hidden rounded-md bg-[#4A4F8C] px-6 text-neutral-50 transition hover:bg-[#7B89B8] flex items-center justify-center"
                >
                    <span className="relative flex items-center gap-2">
                        <FaDiscord size={24} />
                        <span>Join Our Discord!</span>
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

                <br className="mt-10"/>

                <Countdown />

                <EventCard 
                flyerImage='e1.png'
                  title="Blockchain 101 with Karim Saadeh" 
                  date="Nov 27, 2024" 
                  time="6:00 PM-7:00 PM" 
                  location="Carleton University, Ottawa" 
                  room="HP 5435" 
                  onSignUp={() => window.open("https://lu.ma/l94aro7a", "_blank")} 
                />
                <OurMission/>

                <section className="w-full max-w-6xl mx-auto px-4 py-5">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="flex flex-col items-center">
                                <div className="relative w-48 h-48 mb-4">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                                <p className="text-[#4A4F8C] font-medium">{member.role}</p>
                                <p className="text-gray-600 text-center mt-2">
                                    {member.program} • {member.year}
                                </p>
                                <div className="flex gap-4 mt-3">
                                    <SocialIcon
                                        href={member.linkedin}
                                        icon={FaLinkedin}
                                        label="LinkedIn"
                                    />
                                    <SocialIcon
                                        href={member.x}
                                        icon={() => (
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                          </svg>
                                        )}
                                        label="Email"
                                    />
                                    {member.website && (
                                        <SocialIcon
                                            href={member.website}
                                            icon={() => (
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                                                </svg>
                                            )}
                                            label="Website"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-8 py-10">
                        <button className="group relative">
                            <a 
                                href="https://airtable.com/appFyj8uk3eYgu15j/pagyl0OneNLCVTXpA/form" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
                            >
                                Join Our Team! 🚀
                            </a>
                            <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
                        </button>
                    </div>
                </section>

                <div className='flex flex-col items-center justify-center flex-1 px-6 md:px-20 space-y-8'>
                    {faqs.map((faq, index) => (
                        <FAQ
                            key={index}
                            faq={faq}
                            isOpen={openFaq === index}
                            onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                        />
                    ))}
                </div>
                

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