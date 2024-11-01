"use client";

import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useRef, useEffect, CSSProperties, useState } from 'react';
import SocialIcon from './common/SocialIcon';
// import AnimatedButton from "components/Buttons';

export default function Home() {
    const words = [
      'DeFi💰', 'DePIN🌐', 'Stablecoins💵', 'NFTs🎨', 'DAOs👥', 'Web3🛜', 'Blockchain⛓️',
      'Crypto💰', 'Proof-of-Stake🔑', 'Proof-of-Work💻', 'Smart Contracts🔒','Proof-of-History🔎',
      'Ethereum💎', 'Bitcoin🐐', 'Solana🌞',
    ];

    const socialLinks = [
      {
        href: 'https://www.linkedin.com/company/carleton-blockchain/',
        icon: FaLinkedin,
        label: 'LinkedIn',
      },
      {
        href: 'mailto:info@carletonblockchain.ca',
        icon: MdEmail,
        label: 'Email',
      },
      {
        href: 'https://x.com/carletobchain',
        icon: () => (
            <svg width="24" height="24" viewBox="0 0 20 22" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
        ),
        label: 'X'
      },
      {
        href: 'https://www.instagram.com/carletonblockchain/',
        icon: FaInstagram,
        label: 'Instagram',
      },
      {
        href: 'https://discord.gg/3mDZXNnH',
        icon: FaDiscord,
        label: 'Discord',
      },
    ];

    const teamMembers = [
      {
        name: 'Rodney Shen',
        role: 'Co-Founder',
        program: 'Computer Science',
        year: '3th Year',
        image: '/pfp/pfp.png',
        linkedin: 'https://linkedin.com/in/alexjohnson',
        email: 'alex@example.com'
      },
      {
        name: 'Eshan Betrabet',
        role: 'Co-Founder',
        program: 'Cognitive Science',
        year: '4th Year',
        image: '/pfp/eshan.png',
        linkedin: 'https://www.linkedin.com/in/eshan-betrabet/',
        email: 'john@example.com'
      },
      {
        name: 'Cedric Osagie',
        role: 'Co-Founder',
        program: 'Commerce',
        year: 'Alumni',
        image: '/pfp/cedric.png',
        linkedin: 'https://www.linkedin.com/in/cedric-osagie/',
        email: 'jane@example.com'
      },
    ];

    const faqs = [
        {
            question: "What is Carleton Blockchain?",
            answer: "Carleton Blockchain is a student-led organization dedicated to educating and connecting students interested in blockchain technology and cryptocurrency. We host workshops, events, and provide networking opportunities with industry professionals."
        },
        {
            question: "Do I need prior blockchain knowledge to join?",
            answer: "Not at all! We welcome members of all experience levels, from complete beginners to blockchain experts. Our community is focused on learning and growing together."
        },
        {
            question: "How can I get involved?",
            answer: "You can join our Discord community, attend our events, and participate in our workshops. We also offer opportunities to join our executive team during recruitment periods."
        },
        {
            question: "What kind of events do you organize?",
            answer: "We plan on starting with technical workshops, down the line we will be looking to host industry speaker sessions, networking events, hackathons, and social gatherings. Our events cover various aspects of blockchain technology, cryptocurrency, and Web3."
        },
        {
            question: "Is membership free?",
            answer: "Yes! Membership is completely free for all Carleton University students. Just join our Discord and start participating in our community."
        },
        {
          question: "Will you teach me how to find x1000 memecoins ?",
          answer: "No."
      },
    ];

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_2rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_50%_350px,#C9EBFF,transparent)]">
                </div>
            </div>
            
            <div className="flex items-center justify-between w-full px-12 py-14">
                <div className="flex items-center">
                    <Image
                        src="/cublockchain1.png"
                        alt="Logo"
                        width={50}
                        height={50}
                        className="hover:opacity-80 transition-opacity"
                    />
                    <div className="ml-4 flex flex-col">
                        <span className="text-xl font-bold text-gray-800">Carleton Blockchain</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="flex gap-4 mr-12 py-4">
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
                </div>
            </div>

            <main className="flex flex-col items-center justify-center flex-1 px-20 py-20 space-y-8">
                <Image
                    src="/cublockchain1.png"
                    alt="Logo"
                    width={120}
                    height={120}
                    className="hover:opacity-80 transition-opacity animate-bounce [animation-duration:2s] [animation-height:0.5rem]"
                    priority
                />
                
                <div className="flex flex-col items-center space-y-2 text-center">
                    <h1 className="text-6xl font-bold text-gray-800">
                        Crypto <span className="text-[#4A4F8C]">Curious🧐</span>?
                    </h1>
                </div>

                <div className="flex flex-col items-center space-y-2 text-center">
                    <h3 className="text-lg font-medium text-gray-800">
                        At Carleton Blockchain, we're fostering the next generation of crypto
                    </h3>
                    <h3 className="text-lg font-medium text-gray-800">
                        enthusiasts and blockchain developers!
                    </h3>
                </div>

                <a
                    href="https://discord.gg/3mDZXNnH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative h-12 overflow-hidden rounded-md bg-[#4A4F8C] px-6 text-neutral-50 transition hover:bg-[#7B89B8] flex items-center justify-center"
                >
                    <span className="relative flex items-center gap-2">
                        <FaDiscord size={24} />
                        <span>Join Our Discord!</span>
                    </span>
                    <div className="absolute inset-0 flex w-full [animation:shine_3.5s_ease-in-out_infinite]">
                        <div className="relative h-full w-8 -skew-x-12 bg-white/20 translate-x-[-200%]"></div>
                    </div>
                    <style jsx>{`
                        @keyframes shine {
                            from { transform: translateX(-200%); }
                            to { transform: translateX(200%); }
                        }
                    `}</style>
                </a>

                <section className="w-full max-w-4xl mx-auto px-4 py-24">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                Our Mission
            </h2>
            <div className="bg-white p-8 shadow-lg"> 
                <p className="text-lg text-gray-700 text-center leading-relaxed">
                    Blockchain technology is the future.
                    <br />
                    -
                    <br />
                    Our mission at Carleton Blockchain is to educate, innovate, 
                    and build a community of blockchain enthusiasts at Carleton University 
                    through workshops, hackathons, and industry connections.
                </p>
            </div>
        </section>

                <section className="w-full max-w-6xl mx-auto px-4 py-16">
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
                                        href={`mailto:${member.email}`}
                                        icon={() => (
                                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                          </svg>
                                        )}
                                        label="Email" 
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-20">
                        <button className="group relative">
                            <a 
                                href="https://airtable.com/appFyj8uk3eYgu15j/pagyl0OneNLCVTXpA/form" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-600 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
                            >
                                Join Our Team! 🚀
                            </a>
                            <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
                        </button>
                    </div>
                </section>

                <section className="w-full max-w-4xl mx-auto px-4 py-16">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
                        Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index} 
                                className="bg-gradient-to-br from-[#7B89B8]/10 to-[#B8C6E5]/10 backdrop-blur-sm rounded-lg overflow-hidden"
                            >
                                <button
                                    className="flex justify-between items-center w-full p-4 text-left"
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                >
                                    <span className="font-medium text-gray-800">{faq.question}</span>
                                    <svg
                                        className={`w-6 h-6 transform transition-transform ${
                                            openFaq === index ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="black"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                                <div
                                    className={`transition-all duration-300 ease-in-out ${
                                        openFaq === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                                >
                                    <p className="p-4 pt-0 text-gray-600">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
                        <button className="group relative h-12 overflow-hidden overflow-x-hidden rounded-md bg-white px-8 py-2 text-[#7B89B8] border border-[#7B89B8]">
                            <a 
                                href="https://airtable.com/appFyj8uk3eYgu15j/pagfjUclBI8HI1kxi/form"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 group-hover:text-white transition-colors"
                            >
                                Want to Connect? Reach Out
                            </a>
                            <span className="absolute inset-0 overflow-hidden rounded-md">
                                <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-[#7B89B8] transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150">
                                </span>
                            </span>
                        </button>
                    </div>
                    
                </section>
            </main>

            <footer className="w-full bg-[#F5F7FC] py-12 px-8">
                {/* Logo Section */}
                <div className="flex items-center justify-center mb-8">
                    <Image
                        src="/cublockchain1.png"
                        alt="Logo"
                        width={40}
                        height={40}
                        className="hover:opacity-80 transition-opacity"
                    />
                    <span className="ml-3 text-xl font-bold text-gray-800">Carleton Blockchain</span>
                </div>

                {/* Navigation Links
                <div className="flex justify-center space-x-8 mb-8">
                    <a href="#mission" className="text-gray-600 hover:text-[#4A4F8C] transition-colors">Mission</a>
                    <a href="#team" className="text-gray-600 hover:text-[#4A4F8C] transition-colors">Team</a>
                    <a href="#contact" className="text-gray-600 hover:text-[#4A4F8C] transition-colors">Contact</a>
                </div> */}
                <div className="flex items-center justify-center w-full">
                    <div className="flex gap-4 py-4">
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
                </div>


                {/* Trademark */}
                <div className="text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Carleton Blockchain. All rights reserved.
                </div>
            </footer>

        </div>
    );
}