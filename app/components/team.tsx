import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import SocialIcon from '../common/SocialIcon';
import { teamMembers } from '../common/Data';


export default function MeetTheTeam() {
    return(
        <div>
            <section className="w-full max-w-6xl mx-auto px-4 py-5" >
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
                    <div className="flex justify-center mt-8 py-10">
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
        </div>
    )
}