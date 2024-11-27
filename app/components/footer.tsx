import { socialLinks } from '@/app/common/Data';
import SocialIcon from '@/app/common/SocialIcon';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return(
        <div>
            <footer className="w-full bg-[#F5F7FC] py-12 px-8">
                {/* Logo Section */}
                <div className="flex items-center justify-center mb-8">
                    <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                        <Image
                            src="/cublockchain1.ico"
                            alt="Logo"
                            width={40}
                            height={40}
                        />
                        <span className="ml-3 text-xl font-bold text-gray-800">Carleton Blockchain</span>
                    </Link>
                </div>

                {/* Teams and Join Us Links */}
                <div className="flex justify-center gap-8 mb-4">
                    <Link href="/team" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Teams
                    </Link>
                    <Link href="https://simplistic-character-5e4.notion.site/Carleton-Blockchain-Recruiting-14bf02539b1f8052ac89c3130c8d37f1?pvs=73" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                        Join Us
                    </Link>
                </div>

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
    )

}