"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaLinkedin} from 'react-icons/fa';
import Header from '../components/header';
import SocialIcon from '../common/SocialIcon';
import Footer from '../components/footer';
import { teamMembers } from '../common/Data';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  program?: string;
  year?: string;
  linkedin?: string;
  x?: string;
  website?: string;
}

export default function TeamPage() {

    return (
        <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="min-h-screen relative"
        >
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem]">
            </div>

            <Header/>
            {/* Hero Section */}
            <div className="w-full max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <span className="inline-block px-4 py-1 mb-4 text-sm bg-[#4A4F8C] text-white rounded-full">
                        Team
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black ">
                        Meet Our Team😎
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        2015-2016 Golden State Warriors, 1995-1996 Bulls, meet our super team! 
                    </p>
                </div>

                {/* First Team Grid */}
                <div className="overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.75, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
                    >
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
                                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-black">{member.name}</h3>
                                <p className="text-gray-600 mb-3">{member.role}</p>

                                <p className="text-gray-600 text-center mt-2 mb-4">
                                        {member.program}{member.program && member.year ? ' • ' : ''}{member.year}
                                </p>
                                <div className="flex justify-center space-x-4">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-gray-800" />
                                        </a>
                                    )}
                                    {member.x && (
                                        <a href={member.x} target="_blank" rel="noopener noreferrer">
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
                    </motion.div>
                </div>

                <div className="h-8"></div> {/* Spacer between grids */}

                {/* Second Team Grid */}
                {/* <div className="overflow-hidden">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8"
                    >
                        {teamMembersRow2.map((member: TeamMember, index: number) => (
                            <motion.div 
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ 
                                    duration: 0.75, 
                                    ease: "easeOut",
                                    delay: index * 0.1
                                }}
                                className="text-center"
                            >
                                <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-black">{member.name}</h3>
                                <p className="text-gray-600 mb-3">{member.role}</p>

                                <p className="text-gray-600 text-center mt-2 mb-4">
                                        {member.program}{member.program && member.year ? ' • ' : ''}{member.year}
                                </p>
                                {/* <p className="text-sm text-gray-500 mb-4">{member.bio}</p> */}
                                {/* <div className="flex justify-center space-x-4">
                                    {member.linkedin && (
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                                            <FaLinkedin className="w-5 h-5 text-gray-600 hover:text-gray-800" />
                                        </a>
                                    )}
                                    
                                    
                                    {member.x && (
                                        <a href={member.x} target="_blank" rel="noopener noreferrer">
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
                    </motion.div>
                // </div> */}
                
                {/* Join Team Button */}
                <div className="flex flex-col items-center mt-16">
                    <h3 className="text-2xl font-semibold mb-6 text-black">Think you are a good fit?</h3>
                    <button className="group relative">
                        <a 
                            href="https://simplistic-character-5e4.notion.site/Carleton-Blockchain-Recruiting-14bf02539b1f8052ac89c3130c8d37f1?pvs=73" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3"
                        >
                            Join Our Team! 🚀
                        </a>
                        <div className="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5]"></div>
                    </button>
                </div>
            </div>
            <Footer />
        </motion.main>
    );
}
