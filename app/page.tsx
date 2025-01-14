"use client";
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import Footer from './components/footer';
import FAQ from './components/faq';
import Header from './components/header';
import { motion, useInView } from 'framer-motion';
import { faqs, TeamMember } from './common/Data';
import Marquee from 'react-fast-marquee'; 
import { FaLinkedin } from 'react-icons/fa';
import SocialIcon from './common/SocialIcon';
import fetchGraphQL from './utils/contentfulClient';

export default function Home() {
    const [teamMembers, setTeam] = useState([]);
    const [marqueeImages, setMarquee] = useState([]);
    const QUERY = `query{
     homeMarqueeCollection{
        items{
        marqueeImagesCollection{
            items{
            url(transform:{width:500 format:WEBP quality:80})
            }
        }
        }
    }
    teamMemberCollection{
        items{
        name
        role
        avatar{
            url(transform:{width:384 height:384 format:AVIF})
        }
        linkedIn
        website
        xtwitter
        major
        year
            
        }
        }
    }`
    useEffect(() => {
        fetchGraphQL(QUERY)
        .then((data) => {
            setTeam(data.teamMemberCollection.items);
            setMarquee(data.homeMarqueeCollection.items[0].marqueeImagesCollection.items);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    //const countdownRef = useRef(null);
    const faqRef = useRef(null);
    //const isCountdownInView = useInView(countdownRef, { once: true });
    const isFaqInView = useInView(faqRef, { once: true });
    interface ImageSchema{
        url: string;
    }
    return (
        <div className="min-h-screen flex flex-col relative">
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_320px_at_50%_350px,#C9EBFF,transparent)]">
                </div>
            </div>
            <Header/>

            <div className="h-20"></div>

            <motion.main
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center justify-center flex-1 px-4 md:px-20 py-16 space-y-8"
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
                    <h1 className="text-4xl md:text-7xl font-medium text-gray-800">
                        Crypto <span className="text-[#4A4F8C]">Curious</span>?
                    </h1>
                </div>

                <div className="flex flex-col items-center space-y-2 text-center px-2 md:px-0">
                    <h3 className="text-xs md:text-base font-medium text-gray-600">
                        At Carleton Blockchain, we&apos;re building the next wave of
                    </h3>
                    <h3 className="text-xs md:text-base font-medium text-gray-600">
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

                <div className="h-32"></div>

                <div className="w-full px-4 py-16 relative overflow-hidden flex justify-center">
                    <div className="flex flex-col md:flex-row gap-8 md:gap-32 items-start max-w-7xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: [0.215, 0.610, 0.355, 1.000],
                                delay: 0.2
                            }}
                            className="flex-1 mb-12 md:mb-0"
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.215, 0.610, 0.355, 1.000],
                                    delay: 0.3
                                }}
                                className="inline-block px-4 py-2 bg-[#4A4F8C] rounded-full mb-6"
                            >
                                <span className="text-white text-sm font-bold">OUR IMPACT</span>
                            </motion.div>
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.215, 0.610, 0.355, 1.000],
                                    delay: 0.4
                                }}
                                className="text-5xl font-light text-[#1E3A2F] mb-6"
                            >
                                Empowering students<br />to build and innovate<br /> onchain.
                            </motion.h2>
                            <motion.p 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7,
                                    ease: [0.215, 0.610, 0.355, 1.000],
                                    delay: 0.5
                                }}
                                className="text-gray-600 max-w-2xl"
                            >
                                Carleton Blockchain wasn&apos;t started in a classroom, but from a shared vision. 
                                We, a group of passionate students, saw the need for a community that embraces 
                                blockchain innovation, fosters learning, and builds the future of Web3 together.
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.7,
                                ease: [0.215, 0.610, 0.355, 1.000],
                                delay: 0.6
                            }}
                            className="flex-2"
                        >
                            <div className="space-y-8 max-w-sm">
                                {[
                                    { value: "83", text: "club members" },
                                    { value: "3+", text: "industry partners" },
                                    { value: "2", text: "event hosted" },
                                    { 
                                        value: Math.floor((new Date().getTime() - new Date('2024-11-01').getTime()) / (1000 * 60 * 60 * 24)),
                                        text: "days of operation"
                                    }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            ease: [0.215, 0.610, 0.355, 1.000],
                                            delay: 0.7 + (index * 0.1)
                                        }}
                                        className="flex items-baseline gap-4"
                                    >
                                        <div className="text-4xl font-light text-[#1E3A2F]">{item.value}</div>
                                        <div className="text-gray-600">{item.text}</div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="h-12"></div>    

                <Marquee className="overflow-hidden" speed={40} gradient={true} gradientWidth={50} gradientColor="white" autoFill={true}>
                    <div className="flex gap-4 mx-4">
                        {marqueeImages.map((image : ImageSchema, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
                                className="w-[250px] h-[167px]"
                            >
                                <img 
                                    src={image.url}
                                    className="rounded-lg object-cover w-full h-full"
                                    alt="Marquee Image"
                                />
                            </motion.div>
                        ))}
                    </div>
                </Marquee>


                <div className="h-32"></div>



                <div className="flex flex-col items-center space-y-8 px-4 max-w-7xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7,
                            ease: [0.215, 0.610, 0.355, 1.000],
                            delay: 0.2
                        }}
                        className="text-4xl md:text-5xl font-light text-[#1E3A2F] text-center"
                    >
                        Meet Our Team
                    </motion.h2>

                    <div className="h-2"></div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8 w-full">
                        {teamMembers.map((member: TeamMember, index: number) => (
                            <motion.div 
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.5, 
                                    ease: "easeOut",
                                    delay: index * 0.1
                                }}
                                className="text-center"
                            >
                                <div className="aspect-square mb-4 md:mb-6 overflow-hidden rounded-full w-24 md:w-32 mx-auto">
                                    <img
                                        src={member.avatar.url}
                                        alt={member.name}
                                        width={128}
                                        height={128}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-base md:text-lg font-semibold mb-1 text-black">{member.name}</h3>
                                <p className="text-xs md:text-sm text-gray-600 mb-2">{member.role}</p>
                                <p className="text-xs md:text-sm text-gray-600 mb-3">
                                    {member.major}{member.major && member.year != null ? ' • ' : ''}{member.year == 0 ? "Alumni" : member.year == 1 ? "1st Year" : member.year == 2 ? "2nd Year" : member.year == 3 ? "3rd Year" : member.year == 4 ? "4th Year" : "5th Year"}  
                                </p>
                                <div className="flex justify-center space-x-4">
                                    {member.linkedIn && (
                                        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-gray-800" />
                                        </a>
                                    )}
                                    {member.xtwitter && (
                                        <a href={member.xtwitter} target="_blank" rel="noopener noreferrer">
                                            <svg width="20" height="20" viewBox="0 0 20 22" fill="currentColor" className="text-gray-600 hover:text-gray-800">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                            </svg>
                                        </a>
                                    )}
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
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="h-32"></div>

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
                    <h2 className="text-3xl md:text-4xl font-normal text-gray-800">
                    Frequently asked questions
                    </h2>
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
